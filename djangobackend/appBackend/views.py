from .models import ID1, ID2, ID3, Npoem
from .serializer import ID1Serializer, ID2Serializer, ID3Serializer, NpoemSerializer

from rest_framework import status, viewsets

# @action처리
from rest_framework import renderers
from rest_framework.decorators import action
from rest_framework.response import Response
import random

class ID1ViewSet(viewsets.ModelViewSet):
    queryset = ID1.objects.all().order_by('id')
    serializer_class = ID1Serializer

    # @action(method=['post'])
    @action(detail=False, renderer_classes=[renderers.StaticHTMLRenderer])
    # 그냥 얍을 띄우는 custom api
    def getRandom(self, request, *args, **kwargs):
        max = ID3.objects.all().count()
        if (max > 0):
            rand = random.randrange(0, max) + 1
            obj = ID1.objects.all().filter(id=rand)
            serializer = self.get_serializer(obj, many=True)
            return Response(serializer.data)
        else:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

class ID2ViewSet(viewsets.ModelViewSet):
    queryset = ID2.objects.all().order_by('id')
    serializer_class = ID2Serializer

    # @action(method=['post'])
    @action(detail=False, renderer_classes=[renderers.StaticHTMLRenderer])
    # 그냥 얍을 띄우는 custom api
    def getRandom(self, request, *args, **kwargs):
        max = ID2.objects.all().count()
        if (max > 0):
            rand = random.randrange(0, max) + 1
            obj = ID2.objects.all().filter(id=rand)
            serializer = self.get_serializer(obj, many=True)
            return Response(serializer.data)
        else:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

class ID3ViewSet(viewsets.ModelViewSet):
    queryset = ID3.objects.all().order_by('id')
    serializer_class = ID3Serializer

    # @action(method=['post'])
    @action(detail=False, renderer_classes=[renderers.StaticHTMLRenderer])
    # 그냥 얍을 띄우는 custom api
    def getRandom(self, request, *args, **kwargs):
        max = ID3.objects.all().count()
        if (max > 0):
            rand = random.randrange(0, max) + 1
            obj = ID3.objects.all().filter(id=rand)
            serializer = self.get_serializer(obj, many=True)
            return Response(serializer.data)
        else:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

class NpoemViewSet(viewsets.ModelViewSet):
    queryset = Npoem.objects.all().order_by('id')
    serializer_class = NpoemSerializer

    # @action(method=['post'])
    @action(detail=False, renderer_classes=[renderers.StaticHTMLRenderer])
    # 그냥 얍을 띄우는 custom api
    def getRandom(self, request, *args, **kwargs):
        max = Npoem.objects.all().count()
        if (max > 0):
            rand = random.randrange(0, max) + 1
            obj = Npoem.objects.all().filter(id=rand)
            serializer = self.get_serializer(obj, many=True)
            return Response(serializer.data)
        else:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)