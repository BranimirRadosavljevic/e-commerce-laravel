@component('mail::message')
    
# Potvrda o prijemu narudžbe

Poštovani, Vaša narudžba je primljena i trenutno je u obradi.
Hvala Vam što kupujete kod nas.

**Broj narudžbe:** {{ $order->id }} <br>
**Email naručioca:** {{ $order->billing_email }} <br>
**Ime naručioca:** {{ $order->billing_name }} <br>
**Iznos:** {{ presentPrice($order->billing_total) }} <br>

**Naručeni proizvodi:**

@foreach ($order->products as $product)
Naziv: {{ $product->name }} <br>
Cena: {{ presentPrice($product->price) }} <br>
Količina: {{ $product->pivot->quantity }} <br>    
@endforeach


@component('mail::button', ['url' => config('app.url'), 'color' => 'green'])
Posetite naš sajt    
@endcomponent

Hvala na poverenju.

Srdačan pozdrav, <br>
{{ config('app.name') }}
@endcomponent