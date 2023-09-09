from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import PlantTree, UserDetails

class PlantTreeSerializer(ModelSerializer):
  image = serializers.ImageField()

  class Meta:
    model = PlantTree
    fields = "__all__"
  
  def create(self, validated_data):
    print("Creating...")
    user = UserDetails.objects.get(email=self.context.get("email"))
    print(user)
    validated_data["user"] = user
    return super().create(validated_data)
  