from django.http import HttpResponse
from django.shortcuts import render
from collections import Counter
import operator

def homepage(request):
    return render(request, 'home.html', {'username': 'jayden'})

def eggs(request):
    return HttpResponse('<h1>eggs are great</h1>')

def about(request):
    return render(request, 'about.html')

def count(request):
    fulltext=''
    total = 0
    counterlist ={}
    if request.method == 'POST':
        fulltext = request.POST.get('words')
        words = fulltext.split()
        total = len(words)
        counterlist = dict(Counter(words))
        counterlist = sorted(counterlist.items(), key=operator.itemgetter(1), reverse=True)

    return render(request, 'count.html', {'fulltext': fulltext, 'total': total,'counterlist': counterlist})