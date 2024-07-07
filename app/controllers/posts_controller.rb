class PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save!
      redirect_to posts_path, notice: "地点の登録をしました."
    else
      flash.now[:danger] = ("地点作成に失敗しました")
      render :new
    end
  end

  def edit
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:text, :lat, :lng, :name, :address)
  end
end
