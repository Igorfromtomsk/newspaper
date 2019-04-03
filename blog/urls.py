from django.conf.urls import url, include
from blog.resources import PostResource

note_resource = PostResource()
urlpatterns = [
    url(r'^api/', include(note_resource.urls)),
]
