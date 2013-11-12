require 'sinatra'

get '/' do 
	erb :index
end	

get '/message' do
	"Hello world"
end

post '/write' do
	IO.write('empty.txt', params[:message])
	'write Successfuly'
end
