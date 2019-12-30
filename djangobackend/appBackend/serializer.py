from .models import ID1, ID2, ID3, Npoem
from rest_framework import serializers

class ID1Serializer(serializers.ModelSerializer):
    class Meta:
        model = ID1
        fields = '__all__'

class ID2Serializer(serializers.ModelSerializer):
    class Meta:
        model = ID2
        fields = '__all__'

class ID3Serializer(serializers.ModelSerializer):
    class Meta:
        model = ID3
        fields = '__all__'

class NpoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Npoem
        fields = '__all__'