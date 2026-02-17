<template>
  <div class="mt-8 flex items-center">
    <h2 class="mr-auto text-lg font-medium">Change Password</h2>
  </div>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Profile Menu -->
    <div class="col-span-12 flex flex-col-reverse lg:col-span-4 lg:block 2xl:col-span-3">
      <div
        class="box relative before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md mt-5 p-0"
      >
        <div class="relative flex items-center p-5">
          <span
            data-content=""
            class="tooltip border-(--color)/5 block relative flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-12"
          >
            <img
              class="absolute top-0 size-full object-cover"
              src="/assets/images/fakers/profile-4.jpg"
              alt="Midone - Tailwind Admin Dashboard Template"
            />
          </span>
          <div class="ml-4 mr-auto">
            <div class="text-base font-medium">Arnold Schwarzenegger</div>
            <div class="opacity-70">DevOps Engineer</div>
          </div>
          <div data-tw-placement="bottom-end" class="dropdown">
            <a
              data-tw-toggle="dropdown"
              class="dropdown-toggle cursor-pointer relative z-[51] block size-5"
              href="#"
            >
              <i
                data-lucide="more-horizontal"
                class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 size-5 opacity-70"
              ></i>
            </a>
            <div
              class="box before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md dropdown-menu invisible absolute z-50 p-1 opacity-0 before:backdrop-blur-xl [&.show]:visible [&.show]:opacity-100"
            >
              <div class="dropdown-content w-56">
                <a
                  class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 py-3 font-medium"
                >
                  Export Options
                </a>
                <div class="bg-foreground/10 -mx-1 my-px h-px"></div>
                <a
                  class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <i
                    data-lucide="activity"
                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2"
                  ></i>
                  English
                </a>
                <a
                  class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <i
                    data-lucide="box"
                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2"
                  ></i>
                  Indonesia
                  <div
                    class="bg-(--color)/20 border-(--color)/60 text-(--color) flex cursor-pointer items-center rounded-full border px-2 py-px text-xs ml-auto [--color:var(--color-danger)]"
                  >
                    10
                  </div>
                </a>
                <a
                  class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <i
                    data-lucide="layout"
                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2"
                  ></i>
                  English
                </a>
                <a
                  class="relative flex cursor-default select-none hover:bg-foreground/5 items-center rounded-lg px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <i
                    data-lucide="sidebar"
                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2"
                  ></i>
                  Indonesia
                </a>
                <div class="bg-foreground/10 -mx-1 my-px h-px"></div>
                <div class="flex px-2 py-1.5">
                  <button
                    class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)] h-9 rounded-md px-3 text-xs"
                    type="button"
                  >
                    Settings
                  </button>
                  <button
                    class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 h-9 rounded-md px-3 ml-auto text-xs"
                    type="button"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 border-t p-5">
          <a
            class="[&.active]:text-primary active flex items-center [&.active]:font-medium"
            href=""
          >
            <i
              data-lucide="activity"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Personal Information
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="box"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Account Settings
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="lock"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Change Password
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="settings"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            User Settings
          </a>
        </div>
        <div class="flex flex-col gap-5 border-t p-5">
          <a class="flex items-center" href="">
            <i
              data-lucide="activity"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Email Settings
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="box"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Saved Credit Cards
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="lock"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Social Networks
          </a>
          <a class="[&.active]:text-primary flex items-center [&.active]:font-medium" href="">
            <i
              data-lucide="settings"
              class="stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 mr-2 size-4"
            ></i>
            Tax Information
          </a>
        </div>
        <div class="flex border-t p-5">
          <button
            class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 bg-background border-(--color)/20 h-10 px-4 py-2"
            type="button"
          >
            New Group
          </button>
          <button
            class="[--color:var(--color-foreground)] cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-(--color) hover:bg-(--color)/5 bg-background border-(--color)/20 h-10 px-4 py-2 ml-auto"
            type="button"
          >
            New Quick Link
          </button>
        </div>
      </div>
    </div>
    <!-- END: Profile Menu -->
    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
      <!-- BEGIN: Change Password -->
      <div
        class="box relative before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md p-0 lg:mt-5"
      >
        <div class="flex items-center border-b p-5">
          <h2 class="mr-auto text-base font-medium">Change Password</h2>
        </div>
        <div class="p-5">
          <div class="flex flex-col gap-2.5">
            <label
              for="change-password-form-1"
              class="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >Old Password</label
            >
            <input
              id="change-password-form-1"
              type="password"
              placeholder="Input text"
              class="h-10 w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div class="flex flex-col gap-2.5 mt-3">
            <label
              for="change-password-form-2"
              class="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >New Password</label
            >
            <input
              id="change-password-form-2"
              type="password"
              placeholder="Input text"
              class="h-10 w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div class="flex flex-col gap-2.5 mt-3">
            <label
              for="change-password-form-3"
              class="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >Confirm New Password</label
            >
            <input
              id="change-password-form-3"
              type="password"
              placeholder="Input text"
              class="h-10 w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            class="cursor-pointer inline-flex border items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--color)/20 border-(--color)/60 text-(--color) hover:bg-(--color)/5 [--color:var(--color-primary)] h-10 px-4 py-2 mt-4"
            type="button"
          >
            Change Password
          </button>
        </div>
      </div>
      <!-- END: Change Password -->
    </div>
  </div>
</template>
