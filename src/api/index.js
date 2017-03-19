const dummyData = {
  type: {
    nextId: 4,
    entities: [
      {
        id: 0,
        plural: 'Series',
        singular: 'Series',
        children: [
          'book'
        ],
        properties: [
          {
            name: 'name',
          },
        ],
      },
      {
        id: 1,
        plural: 'Books',
        singular: 'Book',
        children: [
          'chapter'
        ],
      },
      {
        id: 2,
        plural: 'Chapters',
        singular: 'Chapter',
        child: true,
      },
      {
        id: 3,
        plural: 'Characters',
        singular: 'Character',
      },
    ],
  },
  series: {
    nextId: 0,
    entities: [
    ]
  },
  book: {
    nextId: 0,
    entities: [
    ]
  },
  chapter: {
    nextId: 0,
    entities: [
    ]
  },
  character: {
    nextId: 1,
    entities: [
      {
        id: 0,
        name: 'Character Name',
        class: 'Human',
        subclass: 'Male',
        physicalDesc: 'Description of character',
        descriptors: [
          {
            id: 1,
            type: 'descriptors',
            references: [{
              series: 0,
              book: 0,
              chapter: 0,
            }],
            links: [{
              id: 1,
              type: 'characters',
              name: 'test1',
            }],
            description: 'Test character description',
          }
        ],
        events: [
          {
            id: 0,
            type: 'events',
            references: [{
              series: 0,
              book: 0,
              chapter: 0,
            }],
            links: [{
              id: 1,
              type: 'characters',
              name: 'test1',
            }],
            description: 'Test character event',
          },
        ],
        children: [
          {
            id: 1,
            type: 'characters',
            name: 'test1',
          },
        ],
      },
    ]
  },
}

class Database {
  init = Promise.resolve()
  .then(() => {
    this._db = dummyData;
  });
  _exists(type, id) {
    return this.init
    .then(() => {
      if (!this._db[type]) throw new Error(`Invalid type ${type}`);
    })
  }
  _getIdx(type, id) {
    return this._exists(type)
    .then(() => {
      const idx = this._db[type].entities.findIndexOf(e => e.id === parseInt(id, 10));
      if (idx === -1) throw new Error(`Invalid entity - type: ${type} id: ${id}`);
      return idx;
    });
  }
  getAll(type) {
    return this._exists(type)
    .then(() => this._db[type].entities);
  }
  add(type, def) {
    return this._exists(type)
    .then(() => {
      this._db[type].entities.push({...def, id: this._db[type].nextId});
      this._db[type].nextId++;
    });
  }
  get(type, id) {
    return this._exists(type)
    .then(() => this._db[type].entities.find(e => e.id === parseInt(id, 10)));
  }
  update(type, id, update) {
    return this._getIdx(type, id)
    .then(idx => this._db[type].entities[idx] = update);
  }
  delete(type, id) {
    return this._getIdx(type, id)
    .then(idx => {
      const ref = this._db[type].entities;
      this._db[type].entities = ref.slice(0,idx).concat(ref.slice(idx+1));
      return true;
    })
  }
  addType(type = {}) {
    const {singular, plural} = type;
    return Promise.resolve()
    .then(() => {
      if (!singular || !plural) throw new Error(`Invalid singular or plural name`);
      return this.getAll('type');
    })
    .then(types => {
      const names = [singular, plural]
      const exists = types.some(t => [t.singular, t.plural].some(n => names.some(nn => nn.toLowerCase() === n.toLowerCase())));
      if (exists) throw new Error(`Type with name ${singular} or ${plural} already exists`);
      return this.add('type', type);
    })
  }
}

const DB = new Database();


export function getIndex(typeStr) {
  return DB.getAll(typeStr);
}
export function getTypes() {
  return getIndex('type');
}

export function getType(typeStr = '') {
}

const indexes = {
  series: [
    {
      id: 0,
      name: 'test1',
    },
    {
      id: 1,
      name: 'test2',
    },
  ],
  book: [
    {
      id: 0,
      name: 'test1',
    },
    {
      id: 1,
      name: 'test2',
    },
  ],
  chapter: [
    {
      id: 0,
      name: 'test1',
    },
    {
      id: 1,
      name: 'test2',
    },
  ],
  character: [
    {
      id: 0,
      name: 'test1',
    },
    {
      id: 1,
      name: 'test2',
    },
  ]
}

const loadingIndexes = {
}
export function loadIndex(typeStr) {
  return getType(typeStr)
  .then(type => {
    if (!type) return null
    const loading = loadingIndexes[typeStr]
    if (loading) return loading;
    // Types = get('/api/types');
    return loadingIndexes[typeStr] = new Promise(resolve => setTimeout(() => resolve(indexes[typeStr])), 1500);
  })
}