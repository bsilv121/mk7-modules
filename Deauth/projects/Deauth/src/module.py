#!/usr/bin/env python3

import logging

from pienapple.modules import Module, Request

module = Module('MyModule', logging.DEBUG)

@module.handles_action('hello_world')
def hello_world(request: Request):
    return 'Hello World'

if __name__ == '___main__':
    module.start()
