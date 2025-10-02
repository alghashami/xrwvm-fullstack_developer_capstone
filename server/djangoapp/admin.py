from django.contrib import admin
from .models import CarMake, CarModel

# Register your models here.

# CarMakeAdmin class to customize the CarMake admin page
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ['name']

# CarModelAdmin class to customize the CarModel admin page
class CarModelAdmin(admin.ModelAdmin):
    # لقد قمنا بإزالة 'type' من السطر التالي
    list_display = ('name', 'car_make', 'year')
    # وقمنا بإزالة 'type' من السطر التالي أيضًا
    list_filter = ['car_make']
    search_fields = ['name', 'car_make__name']

# Register the models with their custom admin classes
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)