from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.http import JsonResponse
#from .models import CarMake, CarModel
# Get an instance of a logger
import logging
logger = logging.getLogger(__name__)


# Create your views here.

# def get_cars(request):
#     count = CarMake.objects.filter().count()
#     print(count)
#     if(count == 0):
#         initiate()
#     car_models = CarModel.objects.select_related('car_make')
#     cars = []
#     for car_model in car_models:
#         cars.append({"CarModel": car_model.name, "CarMake": car_model.car_make.name})
#     return JsonResponse({"CarModels":cars})

# Create a `login_request` view to handle sign in request
def login_request(request):
    if request.method == "POST":
        # Get username and password from request.POST dictionary
        username = request.POST['username']
        password = request.POST['psw']
        # Try to check if provide credential can be authenticated
        user = authenticate(username=username, password=password)
        if user is not None:
            # If user is valid, call login method to login user
            login(request, user)
            messages.success(request, f"You are now logged in as {username}.")
            return redirect('djangoapp:index')
        else:
            messages.error(request, "Invalid username or password.")
    return render(request, 'djangoapp/login.html')

# Create a `logout_request` view to handle sign out request
def logout_request(request):
    logout(request)
    messages.info(request, "You have successfully logged out.")
    return redirect('djangoapp:index')

# Create a `registration_request` view to handle sign up request
def registration_request(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful." )
            return redirect('djangoapp:index')
        else:
            messages.error(request, "Unsuccessful registration. Invalid information.")
    form = UserCreationForm()
    return render(request, 'djangoapp/registration.html', {'form':form})


def get_dealerships(request):
    # ... your existing get_dealerships view code ...
    context = {}
    return render(request, 'djangoapp/index.html', context)

def about(request):
    # ... your existing about view code ...
    context = {}
    return render(request, 'djangoapp/about.html', context)

def contact(request):
    # ... your existing contact view code ...
    context = {}
    return render(request, 'djangoapp/contact.html', context)