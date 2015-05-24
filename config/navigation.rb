SimpleNavigation::Configuration.run do |navigation|  
  navigation.items do |primary|
    primary.item :home, 'Главная', '/'
    primary.item :competition, 'Новости', 'news'
#    primary.item :faq, 'faq', faq_path
    primary.item :top, 'Рейтинг', top_path
    primary.item :translations, 'Статьи', 'news'
    #primary.item :sandboxes, 'Видео', sandboxes_path
    primary.auto_highlight = true
    #primary.dom_class = 'nav navbar-nav pull-left'
  end
end