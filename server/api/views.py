from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def index(request):

  return Response("This is index view")