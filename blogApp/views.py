# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def func1(request):
    return render(request, 'index.html')

