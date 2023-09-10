from django.urls import path
from . import views

urlpatterns = [
  path("", views.index, name="index"),
  path("plant-tree/", views.TreePlantation.as_view(), name="plant-tree"),
  path("events/", views.EventView.as_view(), name="events"),
  path("rrr/", views.RRR.as_view(), name="rrr"),
]