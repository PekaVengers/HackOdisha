from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserDetails

@api_view(["GET"])
def index(request):

  return Response("This is index view")

class TreePlantation(APIView):

  def post(self, request):
      
    name = request.data.get("name")
    email = request.data.get("email")
    profile = request.data.get("profile")
    if not UserDetails.objects.filter(email=email).exists():
      UserDetails.objects.create(name=name, email=email, profile=profile)
    
    print(name, email, profile)
    print("hello world")
    return Response("Tree planted!")