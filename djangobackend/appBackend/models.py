from django.db import models

class ID1(models.Model):
    name = models.CharField(max_length=10)

class ID2(models.Model):
    name = models.CharField(max_length=10)

class ID3(models.Model):
    name = models.CharField(max_length=10)

class Npoem(models.Model):
    npoem = models.CharField(max_length=10)