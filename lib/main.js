import RedditApi from './RedditApi';
import ExtractGifs from './extract-gifs';
import DisplayGifs from './display-gifs';
import Less from 'less';
import jadeToHtml from './jade-html';


RedditApi.load()
.then(ExtractGifs)
.then(DisplayGifs);



