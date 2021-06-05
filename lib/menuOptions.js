const menuOptions = [
  {
    sectionName: "My Stuff",
    sectionOptions: [
      {
        icon: 'fas fa-tv',
        path: '/admin/dashboard',
        label:  'Dashboard'
      },
      {
        icon: 'fas fa-tools',
        path: '/admin/settings',
        label:  'Settings'
      }
    ]
  },
  {
    sectionName: "Products",
    sectionOptions: [
      {
        icon: 'fas fa-tv',
        path: '/admin/products',
        label:  'Products List'
      },
      {
        icon: 'fas fa-tools',
        path: '/admin/addProduct',
        label:  'Add Product'
      }
    ]
  },
  {
    sectionName: "Users",
    sectionOptions: [
      {
        icon: 'fas fa-tv',
        path: '/admin/users',
        label:  'Users'
      },
      {
        icon: 'fas fa-tools',
        path: '/admin/orders',
        label:  'Orders'
      }
    ]
  }
]

export default menuOptions;
