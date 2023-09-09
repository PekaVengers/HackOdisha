from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserDetails, PlantTree, Event
from .serializers import PlantTreeSerializer, EventSerializer
from rest_framework.parsers import MultiPartParser, FormParser


@api_view(["GET"])
def index(request):

  return Response("This is index view")

class TreePlantation(APIView):

  parser_classes = (MultiPartParser, FormParser)

  def get(self, request):
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