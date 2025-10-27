import { createClient } from '@supabase/supabase-js'

// TODO: Replace with your Supabase project credentials
// Get these from: https://app.supabase.com/project/_/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for database operations
export const db = {
  // Blog operations
  blogs: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    },
    
    getById: async (id) => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },
    
    create: async (blog) => {
      const { data, error } = await supabase
        .from('blogs')
        .insert([blog])
        .select()
      
      if (error) throw error
      return data
    },
    
    update: async (id, updates) => {
      const { data, error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', id)
        .select()
      
      if (error) throw error
      return data
    },
    
    delete: async (id) => {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },
  },
  
  // Product operations
  products: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })
      
      if (error) throw error
      return data
    },
    
    getById: async (id) => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },
  },
  
  // Product updates operations
  productUpdates: {
    getByProductId: async (productId) => {
      const { data, error } = await supabase
        .from('product_updates')
        .select('*')
        .eq('product_id', productId)
        .order('date', { ascending: false })
      
      if (error) throw error
      return data
    },
    
    create: async (update) => {
      const { data, error } = await supabase
        .from('product_updates')
        .insert([update])
        .select()
      
      if (error) throw error
      return data
    },
    
    delete: async (id) => {
      const { error } = await supabase
        .from('product_updates')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },
  },
}

