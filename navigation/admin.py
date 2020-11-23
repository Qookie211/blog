from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Subject)
admin.site.register(models.Chapter)
admin.site.register(models.Discuss)
admin.site.register(models.Reply)