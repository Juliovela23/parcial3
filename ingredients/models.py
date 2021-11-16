from django.db import models
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    notes = models.TextField()
    category = models.ForeignKey(
        Category, related_name="ingredients", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
    
class Post(models.Model):
    
    name = models.CharField(max_length=200)
    notes = models.TextField()
    

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name
        