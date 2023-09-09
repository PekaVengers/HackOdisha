from django.urls import path
from . import views

urlpatterns = [
  path("", views.index, name="index"),
  path("plant-tree/", views.TreePlantation.as_view(), name="plant-tree"),
]