from flask import Flask, request
from werkzeug.contrib.cache import SimpleCache
from functools import wraps

cache = SimpleCache()


def cached(timeout=5*60, key='view_{}'):
    def decorator(f):
        wraps(f)
        def decorate_func(*args, **kwargs):
            cache_key = key.format(request.path)
            value = cache.get(cache_key)         #查看这个cache key 时候已经有缓存
            if value is None:                   #如果没有缓存，则通过cache.set设置缓存
                value = f(*args, **kwargs)
                cache.set(cache_key, value, timeout=timeout)
            return value
        return decorate_func
    return decorator

app = Flask(__name__)

@app.route('/')
@cached()
def index():
    print('index is visited')
    return 'hi world'


if __name__ == '__main__':
    app.run(debug=True)