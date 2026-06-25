from rest_framework import serializers
from .models import Contact
from phonenumber_field.serializerfields import PhoneNumberField

class ContactSerializer(serializers.ModelSerializer):
    phone = PhoneNumberField(region='US', required=True)

    class Meta:
        model = Contact
        fields = '__all__'
        