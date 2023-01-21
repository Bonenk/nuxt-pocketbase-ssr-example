export default function ({ $pocketbase, redirect }) {
  // If the user is not authenticated
  if ($pocketbase.authStore.isValid) {
    return redirect('/')
  }
}
