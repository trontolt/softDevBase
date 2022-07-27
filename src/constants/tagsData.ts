export const tagsData = [
  {
    id: 0,
    title: 'Agile',
    definition:
      'Подходы к разработке ПО, основанные на итеративном проходе по скоупу задач разными специалистами, с целью выпуска продукта или его части, удовлетворяющего клиента',
    shortInfo: `<ul><li>Люди и процессы > инстурменты разработки ПО</li><li>Работающий продукт > грамотная документация</li><li>Общение с заказчиком > структурированный контракт</li>
    <li>Работающий продукт > грамотная документация</li><li>Готовность к изменениям > первоначальный план</li></ul>`,
    additionalInfo: `<ol><li>удовлетворение потребностей заказчика, благодаря регулярной и ранней поставке ценного программного обеспечения</li>
    <li>Изменение требований приветствуется</li><li>Работающий продукт следует выпускать как можно чаще, с периодичностью от пары недель до пары месяцев</li>
    <li>На протяжении всего проекта разработчики и представители бизнеса должны ежедневно работать вместе</li><li>Над проектом должны работать мотивированные профессионалы</li>
    <li>Непосредственное общение является наиболее практичным и эффективным способом обмена информацией как с самой командой, так и внутри команды.</li>
    <li>Работающий продукт — основной показатель прогресса.</li><li>Инвесторы, разработчики и пользователи должны иметь возможность поддерживать постоянный ритм бесконечно</li>
    <li>Постоянное внимание к техническому совершенству и качеству проектирования повышает гибкость проекта.</li><li>Простота — искусство минимизации лишней работы — крайне необходима.</li>
    <li>Самые лучшие требования, архитектурные и технические решения рождаются у самоорганизующихся команд.</li><li>Команда должна систематически анализировать возможные способы
    улучшения эффективности и соответственно корректировать стиль своей работы.</li></ol>`,
    topicId: 0
  },
  {
    id: 1,
    title: 'Scrum',
    definition: 'Гибкая методология разработки ПО',
    shortInfo: `<ul><li>Роли<ul><li>Product owner (заказчик или представитель)</li><li>Scrum Master</li><li>Developer Team</li></ul></li><li>Артифакты<ul><li>Product Backlog</li>
    <li>Sprint Backlog</li><li>Sprint Goal</li><li>Burntdown Chart</li></ul></li><li>Компоненты<ul><li>Эпик</li><li>Сторя</li><li>Таска</li></ul></li><li>Собрания<ul>
    <li>Backlog Refinement/grooming</li><li>Sprint Planning</li><li>Daily meetings</li><li>Review (Demo)</li><li>Retrospective</li></ul></li></ul>`,
    additionalInfo:
      'В отличии от канбана - Итерации по 2 недели, оценка в StoryPoints, velocity команды, нет wip limits, задачи определяются в планировании',
    topicId: 0
  },
  {
    id: 2,
    title: 'Kanban',
    definition: 'Подход в реализации agile (улучшение)',
    shortInfo:
      '<ul><li>Роли<ul><li>Service Delivery Manager</li><li>Service Request Manager</li></ul></li><li>Артифакты<ul><li>Доска с wip (work in progress) лимитами</li></ul></li></ul>',
    additionalInfo:
      'В отличии от скрама - нет итераций по 2 недели (разработка непрерывным процессом), оценка постфактум (cycleTime), нет велосити, есть WIP limits, можно добавлять задачи и менять приоритет всегда',
    topicId: 0
  },
  {
    id: 3,
    title: 'Waterfall',
    definition: 'Методология разработки ПО, основанная на поэтапном создании продукта',
    shortInfo: `<ol><li>Requirements (analysis) - сбор информации</li><li>Design, UI - Проектирование, выбор технологии</li><li>Implementation - разработка продукта или его части</li>
      <li>Testing - тесты и доработки</li><li>Maintanance - Поддержание, внесение изменений</li></ol>`,
    additionalInfo: '',
    topicId: 0
  },
  {
    id: 4,
    title: 'Принципы ООП',
    definition:
      'Принципы ООП и проектирования позволяют создавать и поддерживать масштабируемые приложения',
    shortInfo: 'SOLID, YAGNI, DRY, KISS, Big Design Upfront, Avoid Premature Optimization',
    additionalInfo: '',
    topicId: 1
  },
  {
    id: 5,
    title: 'SOLID',
    definition: 'Принцип ООП',
    shortInfo: `<ul>
    <li>
      S - single responsobility (каждый класс реализует один функционал, через него проходит одна ось
      изменений. Декомпозиция, AntiGodObject)
    </li>
    <li>
      O - open-closed (открытость к расширению, но закрытость к изменениям. Если классу нужно добавить
      функционал - делать это добавлением другого класса, с помощью композиции и наследования. Ненужно
      регрессионное тестирование)
    </li>
    <li>
      L - Liskov Substitution (Наследуемый класс может только добавлять, а не удалять или изменять
      поведение родителя. Если функция работает с классом то должна и работать с родителем)
    </li>
    <li>
      I - interface segregation (Выделение общеиспользуемых частей кода (методо) в отдельные
      интерфейсы и имплементация уже их. Устранение не используемых частей)
    </li>
    <li>
      D - Dependency inversion - (Модули верхнего уровня не зависят от модулей нижнего. Модули нижнего
      уровня не зависят от деталей)
    </li>
  </ul>`,
    additionalInfo: '',
    topicId: 1
  },
  {
    id: 6,
    title: 'DRY, KISS, YAGNI and etc.',
    definition: 'Принципы ООП',
    shortInfo: `<ul>
    <li>DRY - Don't repeat yourself (Не писать повторяющиеся части кода)</li>
    <li>KISS - Keep it simple stupid (Писать простые решение, избегать усложнения кода)</li>
    <li>YAGNI - You Aren't Gonna Need It (Удалять неиспользуемые блоки кода)</li>
    <li>Big Design Upfront - Сначала проектирование и план, а после написание кода</li>
    <li>
      Avoid Premature Optomization - Проводить оптимизацию приложения после реализации, а не во время
    </li>
    <li>Бритва Окамма - Избегать ненужных сущностей</li>
  </ul>`,
    additionalInfo: '',
    topicId: 1
  },
  {
    id: 7,
    title: 'Алгоритмы',
    definition: 'Это набор последовательных действий для решения задачи',
    shortInfo: `
    <ul>
      <li style="display: inline-block; margin-right: 1rem">
        <p>
          Линейный <br />
          поиск O(n)
        </p>
        t
        <div
          style="
            background: white;
            width: 50px;
            height: 50px;
            border-left: 1px dotted #555;
            border-bottom: 1px dotted #555;
          "
        >
          <svg viewBox="0 0 50 50" class="chart">
            <polyline
              fill="none"
              stroke="#0074d9"
              stroke-width="2"
              points="
                00,50
                20,45
                40,40
                50,37.5
              "
            />
          </svg>
        </div>
        <span style="text-align: end; width: 50px; display: inline-block">n</span>
      </li>
      <li style="display: inline-block; margin-right: 1rem">
        <p>
          Бинарный <br />
          поиск О(log2n)
        </p>
        t
        <div
          style="
            background: white;
            width: 50px;
            height: 50px;
            border-left: 1px dotted #555;
            border-bottom: 1px dotted #555;
          "
        >
          <svg viewBox="0 0 50 50" class="chart">
            <polyline
              fill="none"
              stroke="#0074d9"
              stroke-width="2"
              points="
                00,50
                10,43
                20,40
                25,38
                30,37
                40,36
                50,35  
              "
            />
          </svg>
        </div>
        <span style="text-align: end; width: 50px; display: inline-block">n</span>
      </li>
      <li style="display: inline-block; margin-right: 1rem">
        <p>
          Сортировка<br />
          выбором О(n<sup>2</sup>)
        </p>
        t
        <div
          style="
            background: white;
            width: 50px;
            height: 50px;
            border-left: 1px dotted #555;
            border-bottom: 1px dotted #555;
          "
        >
          <svg viewBox="0 0 50 50" class="chart">
            <polyline
              fill="none"
              stroke="#0074d9"
              stroke-width="2"
              points="
                00,50
                10,47
                20,43
                30,35
                40,20
                50,00
              "
            />
          </svg>
        </div>
        <span style="text-align: end; width: 50px; display: inline-block">n</span>
      </li>
      <li style="display: inline-block; margin-right: 1rem">
        <p>
          Сортировка <br />
          пузырьковая О(n<sup>2</sup>)
        </p>
        t
        <div
          style="
            background: white;
            width: 50px;
            height: 50px;
            border-left: 1px dotted #555;
            border-bottom: 1px dotted #555;
          "
        >
          <svg viewBox="0 0 50 50" class="chart">
            <polyline
              fill="none"
              stroke="#0074d9"
              stroke-width="2"
              points="
                00,50
                10,45
                20,35
                30,10
                34,00
              "
            />
          </svg>
        </div>
        <span style="text-align: end; width: 50px; display: inline-block">n</span>
      </li>
      <li style="display: inline-block; margin-right: 1rem">
        <p>
          Сортировка <br />
          быстрая Хоара <br />
          О(n Log n)
        </p>
        t
        <div
          style="
            background: white;
            width: 50px;
            height: 50px;
            border-left: 1px dotted #555;
            border-bottom: 1px dotted #555;
          "
        >
          <svg viewBox="0 0 50 50" class="chart">
            <polyline
              fill="none"
              stroke="#0074d9"
              stroke-width="2"
              points="
            00,50
            10,40
            20,30
            30,20
            40,10
            50,00 
          "
            />
          </svg>
        </div>
        <span style="text-align: end; width: 50px; display: inline-block">n</span>
      </li>
      <li>
        Для графов:
        <ul>
          <li style="display: inline-block; margin-right: 1rem">
            <p>
              Поиск <br />
              в ширину <br />
              O(|V|+|E|) <br />
              V - число ребер, <br />
              Е - числов вершин
            </p>
          </li>
          <li <li style="display: inline-block">алгоритм Дейкстры <br />для поиска кратчайшего пути</li>
        </ul>
      </li>
      <li>
        Для деревьев:
        <ul>
          <li style="display: inline-block; margin-right: 1rem">
            <p>Рекурсивно</p>
          </li>
          <li <li style="display: inline-block">Итеративно</li>
        </ul>
      </li>
      <li>Алгоритм кеширования</li>
    </ul>  
    `,
    additionalInfo: '',
    topicId: 2
  },
  {
    id: 8,
    title: 'Алгоритмы поиска',
    definition: 'Позволяют совершить поиск данных максимально эффективно',
    shortInfo: `
    <ul>
      <li>
        Линейный поиск - начиная с первого элемента, последовательно сравниваем с искомым элементом
      </li>
      <li>
        Бинарный поиск - Делим пополам отсортированный массив, если элемент по порядку находится в
        правом подмассиве то делим его пополам и повторяем данную процедуру пока на найдем искомый
        элемент
      </li>
      <li>
      Для графов:
        <ul>
          <li>
            Поиск в ширину - Проходим по графу и ищем, есть ли в графе путь к искомой вершине, 
            тоесть берем искомый элемент и смотрим есть ли он в связях первого элемента графа, если 
            есть то нашли, если нет то ищем дальше и пушим в очередь поиска
          </li>
          <li>
            Алгоритм Дейкстры - похож на поиск в ширину, но учитывается и длина ребер, для поиска кратчайшего пути
          </li>
        </ul>
      </li>
      <li>
      Для деревье: 
        <ul>
          <li>
            Рекурсивно
          </li>
          <li>
            Итеративно
          </li>
        </ul>
      </li>
    </ul>
    `,
    additionalInfo: '',
    topicId: 2
  },
  {
    id: 9,
    title: 'Алгоритмы сортировки',
    definition: 'Позволяют эффективно выполнить сортировку ',
    shortInfo: `
    <ul>
      <li>
        Сортировка выбором - находим минимальный элемент и меняем его с первым, далее начиная со второго
        находим минимальный и меняем со вторым и т.д
      </li>
      <li>
        Пузырьковая сортировка - В двойном цикле проходимся по всем элементам массива, если следующий
        меньше предыдущего, то меняем их местами, таким образом элементы плавно всплывают
      </li>
      <li>
        Быстрая сортировка (Хоара) - Выбираем в массиве опорное число, например посредине, проходим по
        массиву и сравниваем с этим числом, если элемент меньше опорного то засовываем в левый массив,
        если больше то в правый, если равный то в третий массив, эту же процедуру проделать для всех
        подмассивов, в конце склеиваем их в один
      </li>
    </ul>
    `,
    additionalInfo: '',
    topicId: 2
  }
];
