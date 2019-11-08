import axios from 'axios';
import 'babel-polyfill';
import './../sass/styles.scss';

const accessKey = '53b9090a32675e43e865d5429e69c2f97343389ee24bfb13accb9a095735f902';
const blockContent = document.querySelector('.content');

const getData = () => {
  return axios(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
};

getData().then((response) => {
  fillContent(response.data)

}).catch((err) => {
  throw err;
});

const fillContent = (data) => {
  const items = data.map((value) => {
    return `<div class="post">
        <div class="post__user user">
            <img class="user__avatar" src="${value.user.profile_image.small}" />
            <p class="user__info">
              <a class="user__name" target="_blank" href="${value.user.links.html}">
                ${value.user.name}
              </a>
              <span class="user__desc">@${value.user.instagram_username}</span>
            </p>
        </div>
        <div class="post__content">
            <picture>
              <source srcset="${value.urls.full}" media="(min-width: 480px) and (max-width: 768px)">
              <img class="post__photo" src="${value.urls.small}" alt="${value.alt_description}" />
            </picture>
            <p class="post__likes">
              <span class="post__likes-number">${value.likes}</span>
              <svg class="post__likes-icon" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8856 5.38616C17.7248 5.16619 13.8934 0 8.99992 0C4.10647 0 0.274852 5.16619 0.114223 5.38595C-0.0380743 5.59464 -0.0380743 5.87769 0.114223 6.08637C0.274852 6.30635 4.10647 11.4725 8.99992 11.4725C13.8934 11.4725 17.7248 6.30631 17.8856 6.08655C18.0381 5.8779 18.0381 5.59464 17.8856 5.38616ZM8.99992 10.2857C5.39538 10.2857 2.27346 6.85683 1.3493 5.73587C2.27226 4.61392 5.38764 1.18681 8.99992 1.18681C12.6043 1.18681 15.726 4.61512 16.6505 5.73667C15.7276 6.85858 12.6122 10.2857 8.99992 10.2857Z" fill="#8D8D8D"/>
<path d="M9.00016 2.17584C7.03696 2.17584 5.4397 3.7731 5.4397 5.7363C5.4397 7.6995 7.03696 9.29676 9.00016 9.29676C10.9634 9.29676 12.5606 7.6995 12.5606 5.7363C12.5606 3.7731 10.9634 2.17584 9.00016 2.17584ZM9.00016 8.10992C7.69129 8.10992 6.62654 7.04514 6.62654 5.7363C6.62654 4.42747 7.69132 3.36269 9.00016 3.36269C10.309 3.36269 11.3738 4.42747 11.3738 5.7363C11.3738 7.04514 10.309 8.10992 9.00016 8.10992Z" fill="#8D8D8D"/>
</svg>
            </p>
        </div>
    </div>`.trim()
  });

  blockContent.insertAdjacentHTML('beforeend', items.join(``));
};
