/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: "doc",
      id: "home",
      label: "WELCOME",
    },
    {
      type: "category",
      collapsible: false,
      label: "Get Started",
      items: [
        {
          type: "doc",
          id: "tutorials/quickstart",
          label: "Quickstart",
        },
        {
          type: "category",
          label: "Introduction",
          items: [
            {
              type: "doc",
              id: "tutorials/introduction/what-is-permit",
              label: "What is Permit?",
            },
          ],
        },
        {
          type: "category",
          label: "Onboarding",
          items: [
            {
              type: "doc",
              id: "tutorials/onboarding/lets-begin",
              label: "Let's begin!",
            },
            {
              type: "doc",
              id: "tutorials/onboarding/your-workspace",
              label: "Your Workspace",
            },
            {
              type: "doc",
              id: "tutorials/onboarding/policy-and-resources",
              label: "Policy & Resources",
            },
            {
              type: "doc",
              id: "tutorials/onboarding/roles-and-permissions",
              label: "Roles & Permissions",
            },
            {
              type: "doc",
              id: "tutorials/onboarding/connect-your-app",
              label: "Connect Your App",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Features",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "features/projects-and-env",
          label: "Projects & Environments",
        },
        {
          type: "category",
          label: "Policy Editor",
          collapsed: false,
          items: [
            {
              type: "doc",
              id: "features/policy-editor/editor-overview",
              label: "Editor Overview",
            },
            {
              type: "category",
              collapsible: true,
              collapsed: true,
              label: "RBAC",
              items: [
                {
                  type: "doc",
                  id: "features/policy-editor/rbac/overview",
                  label: "Overview",
                },
                {
                  type: "doc",
                  id: "features/policy-editor/rbac/components",
                  label: "Components",
                },
                {
                  type: "doc",
                  id: "features/policy-editor/rbac/building-rbac-policy",
                  label: "Building an RBAC Policy",
                },
              ],
            },
            {
              type: "category",
              collapsible: true,
              collapsed: true,
              label: "ABAC",
              items: [
                {
                  type: "doc",
                  id: "features/policy-editor/abac/overview",
                  label: "Overview",
                },
                {
                  type: "doc",
                  id: "features/policy-editor/abac/components",
                  label: "Components",
                },
                {
                  type: "doc",
                  id: "features/policy-editor/abac/building-abac-policy",
                  label: "Building an ABAC Policy",
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          id: "features/user-management",
          label: "User Management",
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Audit Logs",
          items: [
            {
              type: "autogenerated",
              dirName: "features/audit-logs",
            },
          ],
        },
        // {
        // 	type: "category",
        // 	collapsible: true,
        // 	collapsed: true,
        // 	label: "Loading Data",
        // 	items: [
        // 		{
        // 			type: "autogenerated",
        // 			dirName: "features/loading-data",
        // 		},
        // 	],
        // },
        {
          type: "doc",
          id: "features/coming-soon",
          label: "Coming Soon",
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      label: "Concepts",
      items: [
        {
          type: "doc",
          id: "concepts/authorization-concepts",
          label: "Authorization Concepts",
        },
        {
          type: "doc",
          id: "concepts/control-plane-and-data-plane",
          label: "Control & Data Planes",
        },
        {
          type: "doc",
          id: "concepts/multi-tenancy",
          label: "Multi-Tenancy",
        },
        {
          type: "doc",
          id: "concepts/pdp",
          label: "Policy Decision Point",
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "API",
      items: [
        {
          type: "doc",
          id: "api/v2-migration-guide",
          label: "Migrating v1 to v2",
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "ABAC API",
          items: [
            {
              type: "doc",
              id: "api/working-with-abac/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "api/working-with-abac/operators",
              label: "Operators",
            },
            {
              type: "doc",
              id: "api/working-with-abac/building-conditions",
              label: "Building Conditions",
            },
            {
              type: "doc",
              id: "api/working-with-abac/condition-sets",
              label: "Condition Sets",
            },
            {
              type: "doc",
              id: "api/working-with-abac/condition-set-rules",
              label: "Condition Set Rules",
            },
            {
              type: "doc",
              id: "api/working-with-abac/examples",
              label: "Examples",
            },
          ],
        },
        {
          type: "doc",
          id: "api/api-reference",
          label: "API Reference",
        },
        {
          type: "doc",
          id: "api/api-with-cli",
          label: "API Calls using the CLI",
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      collapsed: true,
      label: "SDK",
      items: [
        {
          type: "category",
          label: "NodeJS",
          items: [
            {
              type: "doc",
              id: "sdk/nodejs/quickstart-nodejs",
              label: "Quickstart",
            },
            {
              type: "category",
              label: "Tenant",
              items: [
                {
                  type: "doc",
                  id: "sdk/nodejs/tenant/get-tenant",
                  label: "getTenant",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/tenant/create-tenant",
                  label: "createTenant",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/tenant/update-tenant",
                  label: "updateTenant",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/tenant/delete-tenant",
                  label: "deleteTenant",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/tenant/list-tenants",
                  label: "listTenants",
                },
              ],
            },
            {
              type: "category",
              label: "User",
              items: [
                {
                  type: "doc",
                  id: "sdk/nodejs/user/sync-user",
                  label: "syncUser",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/user/get-user",
                  label: "getUser",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/user/create-user",
                  label: "createUser",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/user/delete-user",
                  label: "deleteUser",
                },
              ],
            },
            {
              type: "category",
              label: "Role",
              items: [
                {
                  type: "doc",
                  id: "sdk/nodejs/role/get-role",
                  label: "getRole",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/get-assigned-roles",
                  label: "getAssignedRoles",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/create-role",
                  label: "createRole",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/update-role",
                  label: "updateRoles",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/delete-role",
                  label: "deleteRole",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/assign-role",
                  label: "assignRole",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/role/unassign-role",
                  label: "unassignRole",
                },
              ],
            },
            {
              type: "category",
              label: "Resource",
              items: [
                {
                  type: "doc",
                  id: "sdk/nodejs/resource/create-resource",
                  label: "createResource",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/resource/update-resource",
                  label: "updateResource",
                },
                {
                  type: "doc",
                  id: "sdk/nodejs/resource/delete-resource",
                  label: "deleteResource",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Python",
          items: [
            {
              type: "doc",
              id: "sdk/python/quickstart-python",
              label: "Quickstart",
            },
            {
              type: "category",
              label: "Tenant",
              items: [
                {
                  type: "doc",
                  id: "sdk/python/tenant/get-tenant",
                  label: "get_tenant",
                },
                {
                  type: "doc",
                  id: "sdk/python/tenant/create-tenant",
                  label: "create_tenant",
                },
                {
                  type: "doc",
                  id: "sdk/python/tenant/update-tenant",
                  label: "update_tenant",
                },
                {
                  type: "doc",
                  id: "sdk/python/tenant/delete-tenant",
                  label: "delete_tenant",
                },
                {
                  type: "doc",
                  id: "sdk/python/tenant/list-tenants",
                  label: "list_tenants",
                },
              ],
            },
            {
              type: "category",
              label: "User",
              items: [
                {
                  type: "doc",
                  id: "sdk/python/user/sync-user",
                  label: "sync_user",
                },
                {
                  type: "doc",
                  id: "sdk/python/user/get-user",
                  label: "get_user",
                },
                // {
                // 	type: "doc",
                // 	id: "sdk/python/user/create-user",
                // 	label: "create_user",
                // },
                {
                  type: "doc",
                  id: "sdk/python/user/delete-user",
                  label: "delete_user",
                },
              ],
            },
            {
              type: "category",
              label: "Role",
              items: [
                {
                  type: "doc",
                  id: "sdk/python/role/get-role",
                  label: "get_role",
                },
                {
                  type: "doc",
                  id: "sdk/python/role/get-assigned-roles",
                  label: "get_assigned_roles",
                },
                {
                  type: "doc",
                  id: "sdk/python/role/create-role",
                  label: "create_role",
                },
                {
                  type: "doc",
                  id: "sdk/python/role/update-role",
                  label: "update_roles",
                },
                // {
                // 	type: "doc",
                // 	id: "sdk/python/role/delete-role",
                // 	label: "delete_role",
                // },
                {
                  type: "doc",
                  id: "sdk/python/role/assign-role",
                  label: "assign_role",
                },
                {
                  type: "doc",
                  id: "sdk/python/role/unassign-role",
                  label: "unassign_role",
                },
              ],
            },
            {
              type: "category",
              label: "Resource",
              items: [
                {
                  type: "doc",
                  id: "sdk/python/resource/create-resource",
                  label: "create_resource",
                },
                {
                  type: "doc",
                  id: "sdk/python/resource/update-resource",
                  label: "update_resource",
                },
                {
                  type: "doc",
                  id: "sdk/python/resource/delete-resource",
                  label: "delete_resource",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      label: "integrations",
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Proxies and API Gateways",
          items: [
            {
              type: "doc",
              id: "integrations/gateways/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "integrations/gateways/kong",
              label: "Kong API Gateway",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      label: "Security",
      items: [
        {
          type: "doc",
          id: "security/connectivity",
          label: "Connectivity",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Release Notes",
      items: [
        {
          type: "doc",
          id: "release-notes/v2",
          label: "v. 2.0.0",
        },
      ],
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
  ],
};

module.exports = sidebars;
