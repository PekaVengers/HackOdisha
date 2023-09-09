from django.db import models

class UserDetails(models.Model):
  email = models.EmailField(unique=True)
  name = models.CharField(max_length=100)
  profile = models.CharField(max_length=1024)

class PlantTree(models.Model):
  image = models.ImageField()
  message = models.TextField(null=True, blank=True)
  user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)

class Event(models.Model):
  user = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
  name = models.CharField(max_length=1024)
  location = models.CharField(max_length=1024)
  time = models.CharField(max_length=1024)
  organization = models.CharField(max_length=1024)
  description = models.TextField()