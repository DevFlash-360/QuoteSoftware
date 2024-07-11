from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)  # Note: Use a more secure method for storing passwords
    address = models.TextField()
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.username
