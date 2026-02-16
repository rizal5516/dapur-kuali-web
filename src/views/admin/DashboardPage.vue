<template>
  <div
    class="rubick min-h-screen dark:bg-background before:bg-primary dark:before:bg-foreground/[.01] before:fixed before:inset-0 before:bg-noise after:bg-accent after:bg-contain after:fixed after:inset-0 after:blur-xl dark:after:opacity-20"
  >
    <div
      class="side-menu text-background dark:text-foreground xl:ml-0 transition-[margin] duration-200 fixed top-0 left-0 z-50 group before:content-[''] before:fixed before:inset-0 before:bg-black/80 dark:before:bg-foreground/5 before:backdrop-blur before:xl:hidden after:content-[''] after:absolute after:inset-0 after:bg-primary after:xl:hidden dark:after:bg-background after:bg-noise [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:before:block -ml-[275px] before:hidden"
    >
      <div
        class="close-mobile-menu fixed ml-[275px] xl:hidden z-50 cursor-pointer [&.close-mobile-menu--mobile-menu-open]:block hidden"
      >
        <div class="ml-5 mt-5 flex size-10 items-center justify-center">
          <component
            :is="menuIcons.closeIcons"
            class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
          />
        </div>
      </div>
      <div
        class="side-menu__content z-20 pt-5 pb-[7.5rem] relative w-[275px] duration-200 transition-[width] group-[.side-menu--collapsed]:xl:w-[110px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] h-screen flex flex-col"
      >
        <div
          class="relative z-10 hidden h-[65px] w-[275px] flex-none items-center overflow-hidden px-6 duration-200 xl:flex group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] group-[.side-menu--collapsed]:xl:w-[110px]"
        >
          <a
            class="flex items-center transition-[margin] duration-200 xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-2 group-[.side-menu--collapsed]:xl:ml-6"
            href=""
          >
            <img class="size-5" src="/assets/images/logo.svg" />
            <div
              class="ml-3.5 text-nowrap transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0"
            >
              <span class="text-base font-medium">CMS </span>
              <span class="text-base font-light">Dapur Kuali</span>
            </div>
          </a>
          <a
            class="toggle-compact-menu border-background/20 bg-background/10 dark:bg-foreground/[.02] dark:border-foreground/[.09] ml-auto hidden items-center justify-center rounded-md border py-0.5 pl-0.5 pr-1 opacity-70 transition-[opacity,transform] hover:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 2xl:flex"
            href=""
          >
            <component
              :is="menuIcons.chevronLeft"
              class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
            />
          </a>
        </div>
        <div
          class="w-full h-full z-20 px-4 overflow-y-auto overflow-x-hidden pb-3 [&:-webkit-scrollbar]:w-0 scroll-smooth [&_.simplebar-scrollbar]:before:!bg-background/70 [-webkit-mask-image:_linear-gradient(to_top,_rgba(0,_0,_0,_0),_black_30px),_linear-gradient(to_bottom,_rgba(0,_0,_0,_0),_black_30px)] [-webkit-mask-composite:_destination-in]"
        >
          <ul class="scrollable">
            <!-- BEGIN: First Child -->
            <li class="side-menu__group-label">PAGES</li>
            <!-- END: First Child -->
            <!-- BEGIN: First Child -->
            <li>
              <a href="javascript:;" class="side-menu__link side-menu__link--active">
                <component
                  :is="menuIcons.dashboard"
                  class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
                />
                <div class="side-menu__link__title">Crud</div>
                <component
                  :is="menuIcons.chevronDown"
                  class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__chevron transition"
                />
              </a>
              <!-- BEGIN: Second Child -->
              <ul class="block">
                <li>
                  <a
                    href="rubick-side-menu-crud-data-list.html"
                    class="side-menu__link side-menu__link--active"
                  >
                    <component
                      :is="menuIcons.dashboard"
                      :size="16"
                      :stroke-width="1.5"
                      class="[--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
                    />
                    <div class="side-menu__link__title">Data List</div>
                  </a>
                  <!-- BEGIN: Third Child -->
                  <!-- END: Third Child -->
                </li>
                <li>
                  <a href="rubick-side-menu-crud-form.html" class="side-menu__link">
                    <component
                      :is="menuIcons.dashboard"
                      :size="16"
                      :stroke-width="1.5"
                      class="[--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon"
                    />
                    <div class="side-menu__link__title">Form</div>
                  </a>
                  <!-- BEGIN: Third Child -->
                  <!-- END: Third Child -->
                </li>
              </ul>
              <!-- END: Second Child -->
            </li>
            <!-- END: First Child -->
          </ul>
        </div>
        <div
          class="side-menu__account group/profile absolute inset-x-0 bottom-0 mx-4 mb-8 transition-[width] group-[.side-menu--collapsed.side-menu--on-hover]:block group-[.side-menu--collapsed]:justify-center xl:group-[.side-menu--collapsed]:flex"
        >
          <div
            class="bg-background/10 border-background/20 dark:bg-foreground/[.02] dark:border-foreground/[.09] flex cursor-pointer items-center rounded-full border p-2.5 opacity-80 backdrop-blur-2xl transition hover:opacity-100"
          >
            <div
              class="border-background/20 dark:border-foreground/20 relative h-10 w-10 flex-none overflow-hidden rounded-full border-4"
            >
              <img
                class="absolute top-0 h-full w-full object-cover"
                src="/assets/images/fakers/profile-8.jpg"
                alt="Midone - Admin Dashboard Template"
              />
            </div>
            <div
              class="ms-3 flex w-full items-center overflow-hidden transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:ms-3 group-[.side-menu--collapsed.side-menu--on-hover]:w-full group-[.side-menu--collapsed.side-menu--on-hover]:opacity-100 xl:group-[.side-menu--collapsed]:ms-0 xl:group-[.side-menu--collapsed]:w-0 xl:group-[.side-menu--collapsed]:opacity-0"
            >
              <div class="w-28">
                <div class="w-full truncate font-medium">Robert De Niro</div>
                <div class="w-full truncate text-xs opacity-60">Administrator</div>
              </div>
              <component
                :is="menuIcons.moveRight"
                :size="16"
                :stroke-width="1.5"
                class="[--color:currentColor] stroke-(--color) fill-(--color)/25 me-4 ms-auto opacity-50"
              />
            </div>
          </div>
          <div class="hidden group-hover/profile:block">
            <div
              class="box p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md text-foreground before:shadow-foreground/5 absolute bottom-0 left-[100%] z-50 ml-2 flex w-64 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl"
            >
              <div class="flex flex-col gap-0.5">
                <div class="font-medium">Robert De Niro</div>
                <div class="mt-0.5 text-xs opacity-70">DevOps Engineer</div>
              </div>
              <div class="bg-foreground/5 h-px"></div>
              <div class="flex flex-col gap-0.5">
                <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                  <component
                    :is="menuIcons.users"
                    :size="16"
                    :stroke-width="1.5"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                  />
                  Profile
                </a>
                <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                  <component
                    :is="menuIcons.shieldAlert"
                    :size="16"
                    :stroke-width="1.5"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                  />
                  Add Account
                </a>
                <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                  <component
                    :is="menuIcons.fileLock"
                    :size="16"
                    :stroke-width="1.5"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                  />
                  Reset Password
                </a>
                <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                  <component
                    :is="menuIcons.fileQuestion"
                    :size="16"
                    :stroke-width="1.5"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                  />
                  Help
                </a>
              </div>
              <div class="bg-foreground/5 h-px"></div>
              <div class="flex flex-col gap-0.5">
                <a class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5" href="">
                  <component
                    :is="menuIcons.power"
                    :size="16"
                    :stroke-width="1.5"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                  />
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="content h-screen transition-[margin,width] duration-200 pt-8 pb-12 px-7 z-10 relative before:absolute before:inset-y-4 before:-ml-px before:right-4 before:opacity-[.07] before:left-4 xl:before:left-0 before:bg-foreground before:rounded-4xl after:absolute after:inset-y-4 after:-ml-px after:right-4 after:left-4 xl:after:left-0 after:bg-[color-mix(in_oklch,_var(--color-background),_var(--color-foreground)_2%)] after:rounded-4xl after:border after:border-foreground/[.15] dark:after:opacity-[.59] xl:ml-[275px] [&.content--compact]:xl:ml-[110px]"
    >
      <div class="h-full overflow-x-hidden">
        <div
          class="content__scroll-area relative z-20 -mr-7 h-full overflow-y-auto pl-4 pr-11 transition-[margin] duration-200 xl:pl-0"
        >
          <div
            class="top-bar group -mt-2 [&.scrolled]:sticky [&.scrolled]:inset-x-0 [&.scrolled]:top-0 [&.scrolled]:z-[999] [&.scrolled]:mt-0"
          >
            <div
              class="flex h-16 items-center gap-5 border-b transition-all group-[.scrolled]:px-5 group-[.scrolled]:rounded-2xl group-[.scrolled]:bg-background group-[.scrolled]:border group-[.scrolled]:shadow-lg group-[.scrolled]:shadow-foreground/5"
            >
              <div
                class="open-mobile-menu bg-background mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border xl:hidden"
              >
                <component
                  :is="menuIcons.chartColumn"
                  :size="16"
                  :stroke-width="1.5"
                  class="[--color:currentColor] stroke-(--color) fill-(--color)/25 rotate-90"
                />
              </div>
              <ul
                class="truncate gap-x-6 [--color-link:var(--color-primary)] [--color-base:var(--color-foreground)] mr-auto hidden xl:flex"
              >
                <li
                  class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
                >
                  <a href="">Apps</a>
                </li>
                <li
                  class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
                >
                  <a href="">Dashboards</a>
                </li>
                <li
                  class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden"
                >
                  <a href="">Overview</a>
                </li>
              </ul>
              <div class="group/profile relative size-9 flex-none">
                <span
                  data-content=""
                  class="tooltip border-(--color)/5 block relative flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-full"
                >
                  <img
                    class="absolute top-0 size-full object-cover"
                    src="/assets/images/fakers/profile-1.jpg"
                    alt="Midone - Tailwind Admin Dashboard Template"
                  />
                </span>
                <div class="hidden group-hover/profile:block">
                  <div
                    class="box p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:shadow-foreground/5 absolute right-0 top-0 z-50 -mr-0.5 -mt-0.5 flex w-64 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl"
                  >
                    <div class="flex flex-col gap-0.5">
                      <div class="font-medium">Johnny Depp</div>
                      <div class="mt-0.5 text-xs opacity-70">Frontend Engineer</div>
                    </div>
                    <div class="bg-foreground/5 h-px"></div>
                    <div class="flex flex-col gap-0.5">
                      <a
                        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5"
                        href=""
                      >
                        <component
                          :is="menuIcons.users"
                          :size="16"
                          :stroke-width="1.5"
                          class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                        />
                        Profile
                      </a>
                      <a
                        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5"
                        href=""
                      >
                        <component
                          :is="menuIcons.shieldAlert"
                          :size="16"
                          :stroke-width="1.5"
                          class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                        />
                        Add Account
                      </a>
                      <a
                        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5"
                        href=""
                      >
                        <component
                          :is="menuIcons.fileLock"
                          :size="16"
                          :stroke-width="1.5"
                          class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                        />
                        Reset Password
                      </a>
                      <a
                        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5"
                        href=""
                      >
                        <component
                          :is="menuIcons.fileQuestion"
                          :size="16"
                          :stroke-width="1.5"
                          class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                        />
                        Help
                      </a>
                    </div>
                    <div class="bg-foreground/5 h-px"></div>
                    <div class="flex flex-col gap-0.5">
                      <a
                        class="hover:bg-foreground/5 -mx-3 flex gap-2.5 rounded-lg px-4 py-1.5"
                        href=""
                      >
                        <component
                          :is="menuIcons.power"
                          :size="16"
                          :stroke-width="1.5"
                          class="[--color:currentColor] stroke-(--color) fill-(--color)/25"
                        />
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="mt-10 text-lg font-medium">Data List Layout</h2>
            <div class="mt-5 grid grid-cols-12 gap-6">
              <div class="col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
                <button
                  class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)] h-10 px-4 py-2 box mr-2"
                >
                  Add New Product
                </button>
                <div data-tw-placement="bottom-end" class="dropdown">
                  <button
                    class="[--color:var(--color-foreground)] border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 bg-background border-(--color)/20 h-10 py-2 dropdown-toggle inline-flex cursor-pointer relative z-[51] box px-2"
                    data-tw-toggle="dropdown"
                  >
                    <span class="flex h-5 w-5 items-center justify-center">
                      <component
                        :is="menuIcons.plus"
                        :size="16"
                        :stroke-width="1.5"
                        class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-4"
                      />
                    </span>
                  </button>
                  <div
                    class="box before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md dropdown-menu invisible absolute z-50 p-1 opacity-0 before:backdrop-blur-xl [&.show]:visible [&.show]:opacity-100"
                  >
                    <div class="dropdown-content w-40">
                      <a
                        class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <component
                          :is="menuIcons.printer"
                          :size="16"
                          :stroke-width="1.5"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
                        />
                        Print
                      </a>
                      <a
                        class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <component
                          :is="menuIcons.file"
                          :size="16"
                          :stroke-width="1.5"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
                        />
                        Export to Excel
                      </a>
                      <a
                        class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      >
                        <component
                          :is="menuIcons.file"
                          :size="16"
                          :stroke-width="1.5"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
                        />
                        Export to PDF
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mx-auto hidden opacity-70 md:block">Showing 1 to 10 of 150 entries</div>
                <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
                  <div class="relative w-56">
                    <input
                      class="h-10 rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 box w-56 pr-10"
                      type="text"
                      placeholder="Search..."
                    />
                    <component
                      :is="menuIcons.search"
                      :size="16"
                      :stroke-width="1.5"
                      class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 absolute inset-y-0 right-0 my-auto mr-3 size-4 opacity-70"
                    />
                  </div>
                </div>
              </div>

              <!-- BEGIN: Data List -->
              <div class="col-span-12 overflow-auto lg:overflow-visible">
                <div class="relative w-full overflow-auto">
                  <table
                    class="w-full caption-bottom border-separate border-spacing-y-[10px] -mt-2"
                  >
                    <thead class="[&_tr]:border-b-0 [&_tr_th]:h-10">
                      <tr
                        class="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-b-0"
                      >
                        <th
                          class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                        >
                          IMAGES
                        </th>
                        <th
                          class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                        >
                          PRODUCT NAME
                        </th>
                        <th
                          class="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-center"
                        >
                          STOCK
                        </th>
                        <th
                          class="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-center"
                        >
                          STATUS
                        </th>
                        <th
                          class="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-center"
                        >
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody class="[&_tr:last-child]:border-0">
                      <tr
                        class="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-b-0"
                      >
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex">
                            <span
                              data-content="Uploaded at 3 October 2022"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-9.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                            <span
                              data-content="Uploaded at 17 July 2020"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background -ms-5"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-4.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                            <span
                              data-content="Uploaded at 12 August 2020"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background -ms-5"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-5.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <a class="whitespace-nowrap font-medium" href=""> Nike Air Max 270 </a>
                          <div class="mt-0.5 whitespace-nowrap text-xs opacity-70">
                            Sport & Outdoor
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r text-center"
                        >
                          170
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex items-center justify-center text-danger">
                            <component
                              :is="menuIcons.checkSquare"
                              :size="16"
                              :stroke-width="1.5"
                              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
                            />
                            Inactive
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex items-center justify-center">
                            <a class="mr-3 flex items-center" href="#">
                              <component
                                :is="menuIcons.checkSquare"
                                :size="16"
                                :stroke-width="1.5"
                                class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-1 size-4"
                              />
                              Edit
                            </a>
                            <a
                              class="text-danger flex items-center"
                              data-tw-toggle="modal"
                              data-tw-target="#delete-confirmation-dialog"
                              href="#"
                            >
                              <component
                                :is="menuIcons.trash"
                                :size="16"
                                :stroke-width="1.5"
                                class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-1 size-4"
                              />
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr
                        class="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-b-0"
                      >
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex">
                            <span
                              data-content="Uploaded at 19 July 2022"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-3.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                            <span
                              data-content="Uploaded at 1 September 2020"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background -ms-5"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-10.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                            <span
                              data-content="Uploaded at 4 September 2020"
                              class="tooltip border-(--color)/5 block relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] bg-background -ms-5"
                            >
                              <img
                                class="absolute top-0 size-full object-cover"
                                src="/assets/images/fakers/preview-9.jpg"
                                alt="Midone - Tailwind Admin Dashboard Template"
                              />
                            </span>
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <a class="whitespace-nowrap font-medium" href=""> Nike Tanjun </a>
                          <div class="mt-0.5 whitespace-nowrap text-xs opacity-70">
                            Sport & Outdoor
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r text-center"
                        >
                          50
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex items-center justify-center text-success">
                            <component
                              :is="menuIcons.checkSquare"
                              :size="16"
                              :stroke-width="1.5"
                              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
                            />
                            Active
                          </div>
                        </td>
                        <td
                          class="shadow-[3px_3px_5px_#0000000b] first:rounded-l-xl last:rounded-r-xl box rounded-none p-4 align-middle [&:has([role=checkbox])]:pr-0 border-y border-foreground/10 bg-background first:border-l last:border-r"
                        >
                          <div class="flex items-center justify-center">
                            <a class="mr-3 flex items-center" href="#">
                              <component
                                :is="menuIcons.checkSquare"
                                :size="16"
                                :stroke-width="1.5"
                                class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-1 size-4"
                              />
                              Edit
                            </a>
                            <a
                              class="text-danger flex items-center"
                              data-tw-toggle="modal"
                              data-tw-target="#delete-confirmation-dialog"
                              href="#"
                            >
                              <component
                                :is="menuIcons.trash"
                                :size="16"
                                :stroke-width="1.5"
                                class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-1 size-4"
                              />
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- END: Data List -->

              <!-- BEGIN: Pagination -->
              <div class="col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
                <nav class="w-full sm:mr-auto sm:w-auto">
                  <ul class="mr-0 flex w-full gap-1 sm:mr-auto sm:w-auto">
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        <i
                          data-lucide="chevrons-left"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-4"
                        ></i>
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        <i
                          data-lucide="chevron-left"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-4"
                        ></i>
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        ...
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        1
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 bg-background h-10 px-4 py-2 box rounded-xl border-inherit"
                      >
                        2
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        3
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        ...
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        <i
                          data-lucide="chevron-right"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-4"
                        ></i>
                      </a>
                    </li>
                    <li class="flex-1 sm:flex-initial">
                      <a
                        class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 h-10 px-4 py-2 border-transparent bg-transparent"
                      >
                        <i
                          data-lucide="chevrons-right"
                          class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-4"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                <select
                  class="bg-(image:--background-image-chevron) bg-[position:calc(100%-theme(spacing.3))_center] bg-[size:theme(spacing.5)] bg-no-repeat relative appearance-none flex h-10 rounded-md border bg-background px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 box mt-3 w-20 sm:mt-0"
                >
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </select>
              </div>
              <!-- END: Pagination -->
            </div>

            <!-- BEGIN: Delete Confirmation Modal -->
            <div
              data-tw-backdrop=""
              class="modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              id="delete-confirmation-dialog"
            >
              <div
                class="box relative before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:bg-background/60 dark:before:shadow-background before:shadow-foreground/60 z-50 mx-auto -mt-16 p-6 transition-[margin-top,transform] duration-[0.4s,0.3s] before:rounded-3xl before:shadow-2xl after:rounded-3xl group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] sm:max-w-lg"
              >
                <div class="p-5 text-center">
                  <i
                    data-lucide="circle-x"
                    class="[--color:currentColor] stroke-(--color) fill-(--color)/25 text-danger mx-auto mt-3 size-16 stroke-1"
                  ></i>
                  <div class="mt-5 text-2xl font-medium">Are you sure?</div>
                  <div class="mt-2 opacity-70">
                    Do you really want to delete these records? <br />
                    This process cannot be undone.
                  </div>
                </div>
                <div class="px-5 pb-8 text-center">
                  <button
                    class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 bg-background border-(--color)/20 h-10 px-4 py-2 mr-1 w-24"
                    data-tw-dismiss="modal"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-danger)] h-10 px-4 py-2 w-24"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <!-- END: Delete Confirmation Modal -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuIcons } from '@/composables/useMenuIcons'

const menuIcons = useMenuIcons()
</script>
