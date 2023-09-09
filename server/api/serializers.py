from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import PlantTree, UserDetails, Event

class PlantTreeSerializer(ModelSerializer):
  image = serializers.ImageField()

  class Meta:
    model = PlantTree
    fields = "__all__"
  
  def create(self, validated_data):
    return super().create(validated_data)
  
class EventSerializer(ModelSerializer):
  class Meta:
    model = Event
    fields = "__all__"