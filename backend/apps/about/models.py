from django.db import models

class Example(models.Model):
    text = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images")