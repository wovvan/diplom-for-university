class TopController < ApplicationController
  def index
  end
    def top_callback
    auth = request.env['omniauth.auth']
    session[:user] = { :nickname => auth.info['nickname'],
                       :image => auth.info['image'],
                       :uid => auth.uid }
    redirect_to root_url
  end
end
