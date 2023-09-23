from django.shortcuts import render
from datetime import datetime
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def index(request):    
    html = "<html><body>INDEX</body></html>"
    return render(request, "django_encasa\index.html")
    # return HttpResponse(html)

def menu(request, nro_menu):    
    html = "<html><body>MENU</body></html>" + nro_menu
    return HttpResponse(html)

def contacto(request):    
    html = "<html><body>CONTACTO</body></html>"
    return HttpResponse(html)



