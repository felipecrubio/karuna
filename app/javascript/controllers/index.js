// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ChatroomSubscriptionController from "./chatroom_subscription_controller"
application.register("chatroom-subscription", ChatroomSubscriptionController)

import FlatpickrController from "./flatpickr_controller"
application.register("flatpickr", FlatpickrController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import OrganizationTabsController from "./organization_tabs_controller"
application.register("organization-tabs", OrganizationTabsController)

import SearchController from "./search_controller"
application.register("search", SearchController)

import TypedJsController from "./typed_js_controller"
application.register("typed-js", TypedJsController)

import UserTabsController from "./user_tabs_controller"
application.register("user-tabs", UserTabsController)
