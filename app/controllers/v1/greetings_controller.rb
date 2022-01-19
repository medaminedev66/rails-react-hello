class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: { greetings: @greetings }.to_json
  end
end
