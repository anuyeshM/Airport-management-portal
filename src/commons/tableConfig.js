//concessioners
//concessionerContacts
//concessionerContracts
//concessionerAddress
//stores
//storeContacts
//products
//adBanner
//storeProductCategories
//concessionerCategoryMaster
//users
//partners
//guidelines
//blog
//blogCategoryMaster
//newsBroadcast
// userRoles
//appType
//usersCategpryMaster
//roleAssetPermissionMapping

const tableConfig = {
  concessioners: {
    header: [
      {
        Header: 'Concessioner ID',
        accessor: 'concessionerId',
      },
      {
        Header: 'Concessioner',
        accessor: 'concessionerName',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        Header: 'Name',
        accessor: 'contactPerson',
      },
      {
        Header: 'Contact No',
        accessor: 'contactNo',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: 'concessionerCode',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: true,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  concessionerContacts: {
    header: [
      {
        Header: 'Contact ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
      },
      {
        Header: 'Email',
        accessor: 'mail',
      },
      {
        Header: 'Is Primary',
        accessor: 'isPrimary',
      },
      {
        Header: 'Is Active',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      id: false,
      name: false,
      mobile: false,
      mail: false,
      isPrimary: false,
      isActive: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 27,
    },
    sortOrder: [],
  },
  stores: {
    header: [
      {
        Header: 'Store ID',
        accessor: 'id',
      },
      {
        Header: 'Store Name',
        accessor: 'storeName',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Terminal',
        accessor: 'terminal',
      },
      {
        Header: 'Sector',
        accessor: 'sector',
      },
      {
        Header: 'Movement Type',
        accessor: 'movementType',
      },
      {
        Header: 'Last Updated',
        accessor: 'lastUpdated',
      },
      {
        Header: 'Contact Person',
        accessor: 'contactPerson',
      },
      {
        Header: 'View Details',
        accessor: 'storeCode',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 9,
    },
    sortOrder: [],
  },
  storeContacts: {
    header: [
      {
        Header: 'Contact ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
      },
      {
        Header: 'Email',
        accessor: 'mail',
      },
      {
        Header: 'Is Primary',
        accessor: 'isPrimary',
      },
      {
        Header: 'Is Active',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      id: false,
      name: false,
      mobile: false,
      mail: false,
      isPrimary: false,
      isActive: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 27,
    },
    sortOrder: [],
  },
  products: {
    header: [
      {
        Header: 'File',
        accessor: 'filename',
      },
      {
        Header: 'Uploaded On',
        accessor: 'created_date',
      },
      {
        Header: 'Uploaded By',
        accessor: 'created_by',
      },
      {
        Header: 'Description',
        accessor: 'remarks',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: true,
      initialPageIndex: 0,
      pageSize: 18,
    },
    sortOrder: [],
  },
  adBanner: {
    header: [
      {
        Header: 'Banner ID',
        accessor: 'bannerId',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Display On',
        accessor: 'displayOn',
      },
      {
        Header: 'Start Time And Date',
        accessor: 'startDateTime',
      },
      {
        Header: 'End Time And Date',
        accessor: 'endDateTime',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: true,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
    permissions: {
    header: [
      {
        Header: 'Permission Id',
        accessor: 'permissionId',
      },
      {
        Header: 'Permission Name',
        accessor: 'permissionName',
      },
      {
        Header: 'Created On',
        accessor: 'created_date',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      permissionId: false,
      permissionName: false,
      created_date: false,
      isActive: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
      assetDetails: {
    header: [
      {
        Header: 'Asset Id',
        accessor: 'id',
      },
      {
        Header: 'Asset Name',
        accessor: 'assetName',
      },
      {
        Header: 'App Type Name',
        accessor: 'appTypeName',
      },
      {
        Header: 'Asset Type',
        accessor: 'assetType',
      },
      {
        Header: 'Created Date',
        accessor: 'created_date',
      },
      
       {
        Header: 'Modified Date',
        accessor: 'modified_date',
      },
      {
        Header:'Status',
        accessor:'isActive'

      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  
  storeProductCategories: {
    header: [
      {
        Header: 'Category ID',
        accessor: 'categoryId',
      },
      {
        Header: 'Category Name',
        accessor: 'categoryName',
      },
      {
        Header: 'Attribute ID',
        accessor: 'attributeId',
      },
      {
        Header: 'Attribute Name',
        accessor: 'attributeName',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 108,
    },
    sortOrder: [],
  },
  concessionerCategoryMaster: {
    header: [
      {
        Header: 'Category ID',
        accessor: 'id',
      },
      {
        Header: 'Category',
        accessor: 'categoryName',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 108,
    },
    sortOrder: [],
  },
  users: {
    header: [
      {
        Header: 'User ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Email ID',
        accessor: 'emailId',
      },
      {
        Header: 'Contact ID',
        accessor: 'contact',
      },
      {
        Header: 'Created On',
        accessor: 'createdAt',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: true,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  partners: {
    header: [
      {
        Header: 'Partner ID',
        accessor: '_id',
      },
      {
        Header: 'Name',
        accessor: 'partnerName',
      },
      {
        Header: 'Code',
        accessor: 'partnerCode',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Type',
        accessor: 'partnerType',
      },
      {
        Header: 'Category',
        accessor: 'partnerCategory',
      },
      {
        Header: 'Status',
        accessor: 'activeFlag',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 9,
    },
    sortOrder: [],
  },

  guidelines: {
    header: [
      {
        Header: 'Id',
        accessor: '_id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'SubHeader',
        accessor: 'subHeader',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 7,
    },
    sortOrder: [],
  },

  blog: {
    header: [
      {
        Header: 'Blog ID',
        accessor: 'blogId',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Approval',
        accessor: 'isApproved',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  concessionerContracts: {
    header: [
      {
        Header: 'Contract ID',
        accessor: 'id',
      },
      {
        Header: 'Contract No',
        accessor: 'contractNo',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'No. of Store',
        accessor: 'storeCount',
      },
      {
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        Header: 'Is Active',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    filter: {
      id: false,
      name: false,
      mobile: false,
      mail: false,
      isPrimary: false,
      isActive: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 27,
    },
    sortOrder: [],
  },
  blogCategoryMaster: {
    header: [
      {
        Header: 'Category ID',
        accessor: 'categoryId',
      },
      {
        Header: 'Category',
        accessor: 'categoryName',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Approval',
        accessor: 'isApproved',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 108,
    },
    sortOrder: [],
  },
  partnerTypeMaster: {
    header: [
      {
        Header: 'Type ID',
        accessor: '_id',
      },
      {
        Header: 'Type',
        accessor: 'partnerType',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Status',
        accessor: 'activeFlag',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 5,
    },
    sortOrder: [],
  },
  partnerCategoryMaster: {
    header: [
      {
        Header: 'Category ID',
        accessor: '_id',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Status',
        accessor: 'activeFlag',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 5,
    },
    sortOrder: [],
  },
  concessionerAddress: {
    header: [
      {
        Header: 'Address ID',
        accessor: 'id',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Office Phone No',
        accessor: 'officePhone',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'ZIP',
        accessor: 'pincode',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'View Details',
        accessor: ' ',
      },
    ],
    // filter: {
    //   id: false,
    //   name: false,
    //   mobile: false,
    //   mail: false,
    //   isPrimary: false,
    //   isActive: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 27,
    },
    sortOrder: [],
  },
  newsBroadcast: {
    header: [
      {
        Header: 'News ID',
        accessor: 'newsId',
      },
      {
        Header: 'News Name',
        accessor: 'title',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'Approval',
        accessor: 'isApproved',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  AppType: {
    header: [
      {
        Header: 'AppType ID',
        accessor: 'appTypeId',
      },
      {
        Header: 'Name',
        accessor: 'appType',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  usersCategoryMaster: {
    header: [
      {
        Header: 'Category ID',
        accessor: 'categoryId',
      },
      {
        Header: 'Category Name',
        accessor: 'categoryName',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  userRoles: {
    header: [
      {
        Header: 'Role ID',
        accessor: 'roleId',
      },
      {
        Header: 'Role Name',
        accessor: 'roleName',
      },
      {
        Header: 'Created On',
        accessor: 'createdOn',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 10,
    },
    sortOrder: [],
  },
  roleAssetPermissionMapping: {
    header: [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Role Name',
        accessor: 'roleName',
      },
      {
        Header: 'Asset Name',
        accessor: 'assetName',
      },
      {
        Header: 'Permission',
        accessor: 'permissionName',
      },
      {
        Header: 'Created On',
        accessor: 'created_date',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],
    // filter: {
    //   orderId: false,
    //   orderStatus: false,
    //   orderDateTime: false,
    //   orderCount: false,
    //   orderAmount: false,
    //   customerName: false,
    //   customerContact: false,
    //   deliveryMethod: false,
    //   deliveryETA: false,
    //   ' ': false,
    // },
    pagination: {
      isServerSide: true,
      initialPageIndex: 0,
      pageSize: 1000000000000000,
    },
    sortOrder: [],
  },
  tenders: {
    header: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'CompanyName',
        accessor: 'CompanyName',
      },
      {
        Header: 'Email ID',
        accessor: 'email',
      },
      {
        Header: 'Contact No',
        accessor: 'contact',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
      {
        Header: 'View Details',
        accessor: 'categoryId',
      },
     
    ],
    filter: {
      orderId: false,
      orderStatus: false,
      orderDateTime: false,
      orderCount: false,
      orderAmount: false,
      customerName: false,
      customerContact: false,
      deliveryMethod: false,
      deliveryETA: false,
      ' ': false,
    },
    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 6,
    },
    sortOrder: [],
  },

  feedback: {
    header: [
      {
        Header: 'Submitted Date ',
        accessor: 'Date',
      },
      {
        Header: 'Rating',
        accessor: 'FeedbackType',
      },
      {
        Header: 'Feedback Type ',
        accessor: 'Rating',
      },
      {
        Header: 'Status',
        accessor: 'isActive',
      },
     
      {
        Header: 'View Details',
        accessor: 'id',
      },
     
    ],

    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 5,
    },
    sortOrder: [],
  },

  contactus: {
    header: [
      {
        Header: 'Name  ',
        accessor: 'name',
      },
      {
        Header: 'Mobile No.  ',
        accessor: 'mobile',
      },
      {
        Header: 'Queries type ',
        accessor: 'Query',
      },
      {
        Header: 'Current Country',
        accessor: 'Country',
      },
     
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: 'View Details',
        accessor: 'userId',
      },
    ],

    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 5,
    },
    sortOrder: [],
  },

  userRegistration: {
    header: [
      
      {
        Header: 'Date of Registration',
        accessor: 'createdAt',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'E-mail Id',
        accessor: 'email',
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobile',
      },
      {
        Header: 'Loyalty Member',
        accessor: 'LoyaltyMember',
      },
      {
        Header: 'User Device',
        accessor: 'userDevice',
      }
     
    ],

    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 5,
    },
    sortOrder: [],
  },

  lostandfound: {
    header: [
      {
        Header: 'Claim Date',
        accessor: 'ClaimDate',
      },
      {
        Header: 'Acknowledgement No.',
        accessor: 'Acknowlege',
      },
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: 'View Details',
        accessor: '',
      },
    ],

    pagination: {
      isServerSide: false,
      initialPageIndex: 0,
      pageSize: 4,
    },
    sortOrder: [],
  },
 
  
};



export default tableConfig;
