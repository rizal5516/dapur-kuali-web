<template>
  <div class="mt-8 flex items-center">
    <h2 class="mr-auto text-lg font-medium">Change Password</h2>
  </div>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-12 2xl:col-span-12">
      <div
        class="box relative before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:shadow-[0px_3px_5px_#0000000b] before:z-[-1] before:rounded-xl after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:rounded-xl after:z-[-1] after:backdrop-blur-md p-0 lg:mt-5"
      >
        <div class="flex items-center border-b p-5">
          <h2 class="mr-auto text-base font-medium">Change Password</h2>
        </div>
        <div class="p-5">
          <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
            <FormInput
              id="change-password-old"
              v-model="form.oldPassword"
              type="password"
              label="Old Password"
              placeholder="Enter old password"
              autocomplete="current-password"
              :error="errors.oldPassword"
              required
            />

            <FormInput
              id="change-password-new"
              v-model="form.newPassword"
              type="password"
              label="New Password"
              placeholder="Enter new password"
              autocomplete="new-password"
              :error="errors.newPassword"
              required
            />

            <FormInput
              id="change-password-confirm"
              v-model="form.confirmPassword"
              type="password"
              label="Confirm New Password"
              placeholder="Confirm new password"
              autocomplete="new-password"
              :error="errors.confirmPassword"
              required
            />

            <div class="mt-1">
              <SubmitButton
                type="submit"
                label="Change Password"
                loading-text="Changing Password..."
                :loading="isLoading"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'
import { useChangePassword } from '@/composables/useChangePassword'

const { form, errors, isLoading, handleSubmit } = useChangePassword()
</script>
