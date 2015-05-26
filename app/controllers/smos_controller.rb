class SmosController < ApplicationController
  before_action :set_smo, only: [:show, :edit, :update, :destroy]

  # GET /smos
  # GET /smos.json
  def index
    @smos = Smo.all
  end

  # GET /smos/1
  # GET /smos/1.json
  def show
  end

  # GET /smos/new
  def new
    @smo = Smo.new
  end

  # GET /smos/1/edit
  def edit
  end

  # POST /smos
  # POST /smos.json
  def create
    @smo = Smo.new(smo_params)

    respond_to do |format|
      if @smo.save
        format.html { redirect_to @smo, notice: 'Smo was successfully created.' }
        format.json { render :show, status: :created, location: @smo }
      else
        format.html { render :new }
        format.json { render json: @smo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /smos/1
  # PATCH/PUT /smos/1.json
  def update
    respond_to do |format|
      if @smo.update(smo_params)
        format.html { redirect_to @smo, notice: 'Smo was successfully updated.' }
        format.json { render :show, status: :ok, location: @smo }
      else
        format.html { render :edit }
        format.json { render json: @smo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /smos/1
  # DELETE /smos/1.json
  def destroy
    @smo.destroy
    respond_to do |format|
      format.html { redirect_to smos_url, notice: 'Smo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_smo
      @smo = Smo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def smo_params
      params[:smo]
    end
end
