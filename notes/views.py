from django.shortcuts import render
# from django.views.generic import View
# from django.http import HttpResponse
# from django.conf import settings
# import os
# # Create your views here.


# class ReactAppView(View):
#     try:
#         with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
#             return HttpResponse(file.read())

#     except:
#         return HttpResponse(
#             """
#                 index.html not found ! build your React app !!
#                 """,
#             status=501,
#         )
