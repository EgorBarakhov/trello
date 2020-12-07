import { orderBy } from 'lodash';

class Sorter {
  constructor($el) {
    this.$el = $el;
    this.items = this.$el.querySelectorAll('.js-item');
    this.list = this.$el;

    this.sortButtonASC = this.$el.querySelector('.js-sort-asc');
    this.sortButtonDESC = this.$el.querySelector('.js-sort-desc');

    this.dataAttributes = Array.from(this.items).map(
      (item) => ({
        node: item,
        ...JSON.parse(item.getAttribute('data-tasklist')),
      }),
    );

    this.bindEvents();
  }

  bindEvents() {
    this.sortButtonASC.addEventListener('click', this.sortByTitleASC);
    this.sortButtonDESC.addEventListener('click', this.sortByTitleDESC);
  }

    sortByTitleASC = () => {
      this.sortButtonASC.classList.add('.hidden');
      this.sortButtonDESC.classList.remove('.hidden');

      const sortedItemsByTitleASC = orderBy(this.dataAttributes, ['title'], ['asc']);
      sortedItemsByTitleASC.forEach((item) => this.list.appendChild(item.node));
    }

    sortByTitleDESC = () => {
      this.sortButtonDESC.classList.add('.hidden');
      this.sortButtonASC.classList.remove('.hidden');

      const sortedItemsByTitleDESC = orderBy(this.dataAttributes, ['title'], ['desc']);
      sortedItemsByTitleDESC.forEach((item) => this.list.appendChild(item.node));
    }
}

export default Sorter;
