from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = PhoneNumberField(null=False, blank=False, unique=True, region="US")
    
    def __str__(self):
        return self.name