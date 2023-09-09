from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserDetails
from .serializers import PlantTreeSerializer
from rest_framework.parsers import MultiPartParser, FormParser


@api_view(["GET"])
def index(request):

  return Response("This is index view")

class TreePlantation(APIView):

  parser_classes = (MultiPartParser, FormParser)

  def post(self, request):
    name = request.data.get("name")
    email = request.data.get("email")
    profile = request.data.get("profile")

    if not UserDetails.objects.filter(email=email).exists():
      UserDetails.objects.create(name=name, email=email, profile=profile)
    user = UserDetails.objects.get(email=email)
    image = request.data.get("image")
    data = {"user": user.pk, "image": image}
    serializer = PlantTreeSerializer(data=data, context={'email': email})
    if serializer.is_valid():
      serializer.save()
      return Response("Tree planted!")

    return Response(serializer.errors)