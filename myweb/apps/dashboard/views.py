from django.shortcuts import render

# Create your views here.


def item(request):
    return render(request, 'item.html')

def login(request):
    return render(request, 'login.html')