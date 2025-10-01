from django.urls import path
from . import views

app_name = 'djangoapp'

urlpatterns = [
    # المسار الفارغ الآن يذهب إلى index
    path(route='', view=views.index, name='index'),
    
    # مسارات الصفحات الأخرى
    path(route='about/', view=views.about, name='about'),
    path(route='contact_us/', view=views.contact, name='contact'),
]