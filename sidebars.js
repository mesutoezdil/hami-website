module.exports = {
  docs: [
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Get started",
        description: "Choose a setup, install HAMi and run a first shared GPU workload.",
      },
      items: [
        "get-started/choose-your-setup",
        "get-started/deploy-with-helm",
        "get-started/verify-hami",
      ],
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Introduction",
        description: "What HAMi is and what it does for you.",
      },
      items: [
        "core-concepts/introduction",
        "key-features/device-sharing",
        "key-features/device-resource-isolation",
      ],
    },
    {
      type: "category",
      label: "Install",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Install",
        description: "Install HAMi, or one of the approaches built on it.",
      },
      items: [
        {
          type: "category",
          label: "HAMi",
          items: [
            "installation/prerequisites",
            "installation/online-installation",
            "installation/offline-installation",
            "installation/upgrade",
            "installation/uninstall",
            "installation/webui-installation",
            "installation/aws-installation",
          ],
        },
        {
          type: "category",
          label: "HAMi-DRA",
          items: ["installation/configure-cdi", "installation/how-to-use-hami-dra"],
        },
        {
          type: "category",
          label: "Volcano-HAMi",
          items: [
            "installation/how-to-use-volcano-vgpu",
            "installation/how-to-use-volcano-ascend",
            {
              type: "category",
              label: "NVIDIA GPU",
              items: [
                "userguide/volcano-vgpu/nvidia-gpu/how-to-use-volcano-vgpu",
                "userguide/volcano-vgpu/nvidia-gpu/monitor",
                {
                  type: "category",
                  label: "Examples",
                  key: "volcano-vgpu-examples",
                  items: [
                    "userguide/volcano-vgpu/nvidia-gpu/examples/default-use",
                    "userguide/volcano-vgpu/nvidia-gpu/examples/use-exclusive-gpu",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "KAI-scheduler-HAMi",
          items: ["userguide/kai-scheduler/how-to-use-kai-scheduler"],
        },
      ],
    },
    {
      type: "category",
      label: "Vendor guides",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Vendor guides",
        description:
          "Start from the supported devices matrix, then follow the guide for your vendor.",
      },
      items: [
        "userguide/device-supported",
        {
          type: "category",
          label: "Share NVIDIA GPU devices",
          items: [
            "userguide/nvidia-device/dynamic-resource-allocation",
            "userguide/nvidia-device/dynamic-mig-support",
            "userguide/nvidia-device/scheduling-policy",
            "userguide/nvidia-device/specify-device-memory-usage",
            "userguide/nvidia-device/specify-device-core-usage",
            "userguide/nvidia-device/specify-device-type-to-use",
            "userguide/nvidia-device/specify-device-uuid-to-use",
            "userguide/nvidia-device/using-resourcequota",
            {
              type: "category",
              label: "Examples",
              key: "nvidia-examples",
              items: [
                "userguide/nvidia-device/examples/use-exclusive-card",
                "userguide/nvidia-device/examples/allocate-device-memory",
                "userguide/nvidia-device/examples/allocate-device-memory2",
                "userguide/nvidia-device/examples/allocate-device-core",
                "userguide/nvidia-device/examples/specify-card-type-to-use",
                "userguide/nvidia-device/examples/specify-certain-card",
                "userguide/nvidia-device/examples/dynamic-mig-example",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Cambricon MLU devices",
          items: [
            "userguide/cambricon-device/enable-cambricon-mlu-sharing",
            "userguide/cambricon-device/specify-device-memory-usage",
            "userguide/cambricon-device/specify-device-core-usage",
            "userguide/cambricon-device/specify-device-type-to-use",
            {
              type: "category",
              label: "Examples",
              key: "cambricon-examples",
              items: [
                "userguide/cambricon-device/examples/allocate-core-and-memory",
                "userguide/cambricon-device/examples/allocate-exclusive",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Hygon DCU devices",
          items: [
            "userguide/hygon-device/enable-hygon-dcu-sharing",
            "userguide/hygon-device/specify-device-memory-usage",
            "userguide/hygon-device/specify-device-core-usage",
            "userguide/hygon-device/specify-device-uuid-to-use",
            {
              type: "category",
              label: "Examples",
              key: "hygon-examples",
              items: [
                "userguide/hygon-device/examples/allocate-core-and-memory",
                "userguide/hygon-device/examples/allocate-exclusive",
                "userguide/hygon-device/examples/specify-certain-cards",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Mthreads GPU devices",
          items: [
            "userguide/mthreads-device/enable-mthreads-gpu-sharing",
            "userguide/mthreads-device/specify-device-memory-usage",
            "userguide/mthreads-device/specify-device-core-usage",
            {
              type: "category",
              label: "Examples",
              key: "mthreads-examples",
              items: [
                "userguide/mthreads-device/examples/allocate-core-and-memory",
                "userguide/mthreads-device/examples/allocate-exclusive",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Iluvatar GPU devices",
          items: [
            "userguide/iluvatar-device/enable-iluvatar-gpu-sharing",
            {
              type: "category",
              label: "Examples",
              key: "iluvatar-examples",
              items: [
                "userguide/iluvatar-device/examples/allocate-bi-v150",
                "userguide/iluvatar-device/examples/allocate-mr-v100",
                "userguide/iluvatar-device/examples/allocate-exclusive-bi-v150",
                "userguide/iluvatar-device/examples/allocate-exclusive-mr-v100",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Enflame GCU devices",
          items: ["userguide/enflame-device/enable-enflame-gcu-sharing"],
        },
        {
          type: "category",
          label: "Share AMD GPU devices",
          items: [
            "userguide/amd-device/enable-amd-gpu-sharing",
            {
              type: "category",
              label: "Examples",
              key: "amd-examples",
              items: ["userguide/amd-device/examples/allocate-core-and-memory"],
            },
          ],
        },
        {
          type: "category",
          label: "Managing AWS Neuron devices",
          items: [
            "userguide/awsneuron-device/enable-awsneuron-managing",
            {
              type: "category",
              label: "Examples",
              key: "awsneuron-examples",
              items: [
                "userguide/awsneuron-device/examples/allocate-neuron-core",
                "userguide/awsneuron-device/examples/allocate-neuron-device",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Managing Vastai devices",
          items: [
            "userguide/vastai/enable-vastai-sharing",
            {
              type: "category",
              label: "Examples",
              key: "vastai-examples",
              items: ["userguide/vastai/examples/default-use"],
            },
          ],
        },
        {
          type: "category",
          label: "Managing Biren devices",
          items: [
            "userguide/biren-device/enable-biren-sharing",
            {
              type: "category",
              label: "Examples",
              key: "biren-examples",
              items: ["userguide/biren-device/examples/default-use"],
            },
          ],
        },
        {
          type: "category",
          label: "Optimize Kunlunxin devices scheduling",
          items: [
            "userguide/kunlunxin-device/enable-kunlunxin-schedule",
            "userguide/kunlunxin-device/enable-kunlunxin-vxpu",
            {
              type: "category",
              label: "Examples",
              key: "kunlunxin-examples",
              items: [
                "userguide/kunlunxin-device/examples/allocate-whole-xpu",
                "userguide/kunlunxin-device/examples/allocate-vxpu",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Optimize MetaX GPU scheduling",
          items: [
            {
              type: "category",
              label: "Share MetaX GPU devices",
              items: [
                "userguide/metax-device/metax-sgpu/enable-metax-gpu-sharing",
                {
                  type: "category",
                  label: "Examples",
                  key: "metax-sgpu-examples",
                  items: [
                    "userguide/metax-device/metax-sgpu/examples/default-use",
                    "userguide/metax-device/metax-sgpu/examples/allocate-exclusive",
                    "userguide/metax-device/metax-sgpu/examples/allocate-qos-policy",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "MetaX GPU topology-aware scheduling",
              items: [
                "userguide/metax-device/metax-gpu/enable-metax-gpu-schedule",
                "userguide/metax-device/metax-gpu/specify-binpack-task",
                "userguide/metax-device/metax-gpu/specify-spread-task",
                {
                  type: "category",
                  label: "Examples",
                  key: "metax-gpu-examples",
                  items: [
                    "userguide/metax-device/metax-gpu/examples/default-use",
                    "userguide/metax-device/metax-gpu/examples/allocate-binpack",
                    "userguide/metax-device/metax-gpu/examples/allocate-spread",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Share Ascend devices",
          items: [
            "userguide/ascend-device/enable-ascend-sharing",
            "userguide/ascend-device/device-template",
            {
              type: "category",
              label: "Examples",
              key: "ascend-examples",
              items: [
                "userguide/ascend-device/examples/allocate-310p",
                "userguide/ascend-device/examples/allocate-910b",
                "userguide/ascend-device/examples/allocate-exclusive",
                "userguide/ascend-device/examples/allocate-soft-slicing",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Operate",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Operate",
        description: "Configure, monitor, queue and troubleshoot a running cluster.",
      },
      items: [
        "userguide/configure",
        {
          type: "category",
          label: "Monitoring",
          items: [
            "userguide/monitoring/device-allocation",
            "userguide/monitoring/real-time-usage",
            "userguide/monitoring/real-time-device-usage",
            "userguide/monitoring/grafana-dashboard",
          ],
        },
        "userguide/benchmark",
        "userguide/hami-webui-user-guide",
        {
          type: "category",
          label: "Using HAMi with Kueue",
          items: [
            "userguide/kueue/how-to-use-kueue",
            {
              type: "category",
              label: "Examples",
              key: "kueue-examples",
              items: ["userguide/kueue/examples/default-use"],
            },
          ],
        },
        "troubleshooting/troubleshooting",
        "faq/faq",
      ],
    },
    {
      type: "category",
      label: "Design and develop",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Design and develop",
        description: "Architecture, GPU internals, build and scheduler design.",
      },
      items: [
        "core-concepts/gpu-virtualization",
        "core-concepts/architecture",
        "core-concepts/hami-architecture",
        "core-concepts/gpu-stack",
        "core-concepts/gpu-driver",
        "core-concepts/ecosystem-integrations",
        "developers/build",
        "developers/protocol",
        "developers/scheduling",
        "developers/hami-core-design",
        "developers/dynamic-mig",
        "developers/gpu-topology-scheduling",
        "developers/kunlunxin-topology",
        "developers/profiling-scheduler",
        "developers/scheduler-event-log",
        "developers/gpu-utilization-metrics",
        "developers/hami-vnpu-core-integration",
        "developers/hami-webui-development-guide",
        "developers/mindmap",
        "diagrams-inventory",
      ],
    },
    {
      type: "category",
      label: "Contributor Guide",
      link: {
        type: "generated-index",
        title: "Contributor Guide",
        description: "Contribution workflow, governance and maintainer ladder.",
      },
      items: [
        "contributor/contributing",
        "contributor/contribute-docs",
        "contributor/github-workflow",
        "contributor/governance",
        "contributor/ladder",
        "contributor/roadmap",
        "contributor/e2e-testing",
      ],
    },
  ],
};
