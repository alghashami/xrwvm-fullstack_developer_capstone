from django.contrib import admin
from .models import CarMake, CarModel

# Register your models here.

# CarModelInline class
class CarModelInline(admin.StackedInline):
    model = CarModel
    extra = 1 # How many extra empty forms to show

# CarMakeAdmin class
class CarMakeAdmin(admin.ModelAdmin):
    inlines = [CarModelInline]
    list_display = ('name', 'description') # Fields to display in the list view
    search_fields = ['name']

# Register the models with their custom admin classes
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel)