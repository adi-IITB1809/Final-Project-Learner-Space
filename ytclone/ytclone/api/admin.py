from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Video  # or any other model you created

admin.site.register(Video)
