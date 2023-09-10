from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserDetails, PlantTree, Event
from .serializers import PlantTreeSerializer, EventSerializer
from rest_framework.parsers import MultiPartParser, FormParser
import openai
from bardapi import Bard


@api_view(["GET"])
def index(request):

  return Response("This is index view")

class TreePlantation(APIView):

  parser_classes = (MultiPartParser, FormParser)

  def get(self, request):
    try:
      trees = PlantTree.objects.all()
      serializer = PlantTreeSerializer(trees, many=True, context={"request": request})
      data = serializer.data
      final_data = []
      for d in data:
        user = UserDetails.objects.get(id=d.get('user'))
        temp = {
          'id': d.get('id'),
          'image': d.get('image'),
          'name': user.name,
          'profile': user.profile,
          'message': d.get('message'),
        }
        final_data.append(temp)
      return Response(final_data)
    except Exception as e:
      print(e)
      return Response("Error")

  def post(self, request):
    name = request.data.get("name")
    email = request.data.get("email")
    profile = request.data.get("profile")

    if not UserDetails.objects.filter(email=email).exists():
      UserDetails.objects.create(name=name, email=email, profile=profile)
    user = UserDetails.objects.get(email=email)
    image = request.data.get("image")
    message = request.data.get("message")
    data = {"user": user.pk, "image": image, "message": message}
    serializer = PlantTreeSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
      return Response("Tree planted!")

    return Response(serializer.errors)

class EventView(APIView):

  def get(self, request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

  def post(self, request):
    name = request.data.get("name")
    email = request.data.get("email")
    profile = request.data.get("profile")

    if not UserDetails.objects.filter(email=email).exists():
      UserDetails.objects.create(name=name, email=email, profile=profile)

    user = UserDetails.objects.get(email=email)
    event_name = request.data.get("event-name")
    location = request.data.get("location")
    time = request.data.get("time")
    organization = request.data.get("organization")
    description = request.data.get("description")

    data = {
      "user": user.pk, 
      "name": event_name,
      "location": location, 
      "time": time, 
      "organization": organization, 
      "description": description, 
    }

    serializer = EventSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
      return Response("Event Created!")

    return Response(serializer.errors)

def get_open_ai_response(user):

  system = "Please provide me details of user query"

  response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",  
    messages=[
      {
        "role": "system",
        "content": system
      },
      {
        "role":"user",
        "content":user
      }

    ],
    max_tokens=500
)
  generated_text = response['choices'][0]["message"]['content']
  return generated_text


def get_resources(role="Software Engineer"):
  input_text = f'''
Hey Bard,
I'm interested in a career as a {role}. Can you provide me with 3 YouTube channels with name, description and link and 3 books with name, description and link that would be helpful for me to pursue this career with their links? It should be json format where first 3 columns will be youtube : resource and then book : resource
Please Please include both the links and names
Thanks,
'''
  res = Bard().get_answer(input_text)
  print("Response from bard is ", res)
  # start_index = res.find("```") + 7
  # end_index = res.rfind("```")
  # res_data = json.loads(res[start_index:end_index])
  return res

class RRR(APIView):

  def post(self, request):
    description = request.data.get('description')
    method = request.data.get("method")
    print(description, method)
    # resp = get_open_ai_response("Please provide a simple python code")
    # resp = get_resources()
    print(resp)
    return Response("Solution")

@api_view(["POST"])
def get_tree_count(request):
  email = request.data.get("email")
  if not UserDetails.objects.filter(email=email).exists():
    return Response(0)
  user = UserDetails.objects.get(email=email)
  ctr = PlantTree.objects.filter(user=user).count()

  return Response(ctr)